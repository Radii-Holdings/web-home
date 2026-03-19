# Radii Web Home

Marketing website for [radii.in](https://www.radii.in/) built with Next.js, Contentlayer, and Tailwind CSS.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env` file and configure the values used by the website:

```bash
RESEND_API_KEY=your_resend_api_key
HUBSPOT_ACCESS_TOKEN=your_hubspot_private_app_token
NEXT_PUBLIC_GTM_ID=G-XXXXXXXXX
```

## Lead Generation Feature

This website now includes a timed lead-capture modal that is mounted globally across the site.

- The modal appears after a visitor stays on a page for more than 25 seconds.
- The form collects name, contact email, and WhatsApp number with country code.
- Clicking the disable link hides the modal for 48 hours using a browser cookie.
- Successfully submitting the lead form hides the modal for 6 months on that browser using a separate browser cookie.
- Submissions are sent server-side to both Resend email notifications and HubSpot CRM.

Implementation references:

- Lead modal UI: `src/components/LeadCaptureModal.js`
- Submission handling and HubSpot sync: `src/app/api/contact/route.js`
- HubSpot property bootstrap script: `scripts/setup-hubspot.cjs`

## HubSpot Setup

Run the following command once after setting `HUBSPOT_ACCESS_TOKEN`:

```bash
npm run setup:hubspot
```

What this command does:

- Checks whether the HubSpot contact property group already exists.
- If the group exists, the script exits cleanly without creating duplicates.
- If the group does not exist, the script creates the contact property group and the custom fields used by the lead form.

HubSpot property-group details:

- Internal HubSpot group name: `radiilab_custom`
- Display label in HubSpot: `radiiLab_custom`
- Custom contact properties created:
  - `radii_lead_name`
  - `radii_lead_email`
  - `radii_whatsapp_number`

## Available Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates the production build.
- `npm run start` runs the production server.
- `npm run lint` runs Next.js linting.
- `npm run setup:hubspot` provisions the HubSpot property group and custom lead fields.

## Deployment Notes

- Make sure `RESEND_API_KEY` and `HUBSPOT_ACCESS_TOKEN` are configured in the hosting environment before deploying.
- Run `npm run setup:hubspot` once for the HubSpot account before relying on live lead submissions.
