// import { NextResponse } from 'next/server';
// import { EmailTemplate } from '@/src/components/Email/template';
// import { Resend } from 'resend';
// export const runtime = 'edge';
// export const dynamic = 'force-dynamic';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(
//     req,
// ) {
//     const body = await req.json();
//     const response = resend.emails.send({
//         from: 'onboarding@resend.dev',
//         to: body?.email,
//         subject: 'You are successfully subscribed to our newsletter',
//         react: EmailTemplate({ firstName: body?.email }),
//       });

//   if ((await response)?.data) {
//     const data = (await response)?.data;
//     return NextResponse.json(data);
//   }else{
//     const data = (await response)?.error;
//     return NextResponse.json(data);
//   }
// }
