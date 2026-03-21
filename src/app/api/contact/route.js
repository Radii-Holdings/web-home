import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs'; // Use Node.js runtime for Resend and HubSpot compatibility

const hubspotBaseUrl = 'https://api.hubapi.com';

function splitFullName(fullName) {
  const trimmedName = fullName.trim();

  if (!trimmedName) {
    return { firstName: '', lastName: '' };
  }

  const [firstName, ...rest] = trimmedName.split(/\s+/);

  return {
    firstName,
    lastName: rest.join(' '),
  };
}

async function syncHubSpotContact({
  name,
  email,
  phoneNumber,
  hubspotAccessToken,
}) {
  if (!hubspotAccessToken) {
    throw new Error('HUBSPOT_ACCESS_TOKEN is not configured.');
  }

  const { firstName, lastName } = splitFullName(name);
  const properties = {
    email,
    firstname: firstName,
    lastname: lastName,
    phone: phoneNumber,
    radii_lead_name: name,
    radii_lead_email: email,
    radii_whatsapp_number: phoneNumber,
  };

  const response = await fetch(`${hubspotBaseUrl}/crm/v3/objects/contacts/batch/upsert`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${hubspotAccessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: [
        {
          idProperty: 'email',
          id: email,
          properties,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `HubSpot contact sync failed with status ${response.status}: ${errorText}`
    );
  }

  return response.json();
}

export async function POST(req) {
  try {
    // Lazy-load environment variables to avoid build-time initialization issues
    const resendApiKey = process.env.RESEND_API_KEY;
    const hubspotAccessToken = process.env.HUBSPOT_ACCESS_TOKEN;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is missing.');
      return NextResponse.json({ error: 'Mail service configuration error.' }, { status: 500 });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(resendApiKey);

    const body = await req.json();
    const projectDetails =
      typeof body.project_details === 'string' ? body.project_details.trim() : '';
    const submissionType =
      body.submission_type === 'lead_capture_modal'
        ? 'lead_capture_modal'
        : 'contact_form';
    const sourcePage = body.source_page || 'Unknown';

    // Validate required fields
    if (!body.name || !body.email || !body.phone_number) {
      return NextResponse.json(
        { error: 'Name, email, and phone number are required.' },
        { status: 400 }
      );
    }

    if (submissionType === 'contact_form' && !projectDetails) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const subject =
      submissionType === 'lead_capture_modal'
        ? `New Lead Capture Submission from ${body.name}`
        : `New Contact Form Submission from ${body.name}`;

    const detailsMarkup = projectDetails
      ? `
        <p><strong>Message:</strong></p>
        <p>${projectDetails}</p>
      `
      : `
        <p><strong>Lead Source:</strong> Timed website modal</p>
      `;

    // Sync to HubSpot
    let hubspotResult = null;
    if (hubspotAccessToken) {
      hubspotResult = await syncHubSpotContact({
        name: body.name,
        email: body.email,
        phoneNumber: body.phone_number,
        hubspotAccessToken,
      });
    } else {
      console.warn('HUBSPOT_ACCESS_TOKEN is missing, skipping HubSpot sync.');
    }

    // Send email using Resend
    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Replace with your verified sender email
      to: 'info@radii.in', // Your email address
      subject,
      html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Submission Type:</strong> ${submissionType}</p>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${detailsMarkup}
        <p><strong>Phone Number:</strong> ${body.phone_number}</p>
        <p><strong>Source Page:</strong> ${sourcePage}</p>
        <p><strong>IP Address:</strong> ${req.headers.get('x-forwarded-for')}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      data: response,
      hubspot: hubspotResult,
    });
  } catch (error) {
    console.error('Error processing contact submission:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
