import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone_number || !body.project_details) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Replace with your verified sender email
      to: 'info@radii.in', // Your email address
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.project_details}</p>
        <p><strong>Phone Number:</strong> ${body.phone_number}</p>
        <p><strong>IP Address:</strong> ${req.headers.get('x-forwarded-for')}</p>
      `,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
