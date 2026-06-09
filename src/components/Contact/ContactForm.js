"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { trackEvent } from "@/src/components/Analytics/TrackedLink";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const hasTrackedStart = React.useRef(false);

  const trackFormStart = () => {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    trackEvent("form_start", {
      form_name: "contact_form",
      form_location: "contact_page",
    });
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Message sent successfully:', result);
        trackEvent("form_submit", {
          form_name: "contact_form",
          form_location: "contact_page",
          lead_type: "sales_contact",
        });
        toast.success('Your message has been sent successfully!');
        reset();
      } else {
        console.error('Failed to send message:', result.error || 'Unknown error');
        toast.error('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onFocus={trackFormStart}
      className="mt-12 w-full max-w-2xl space-y-6 rounded-3xl border border-dark/10 bg-light p-6 font-in text-base shadow-sm"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-dark/70">
            Full name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your full name"
            {...register("name", { required: true, maxLength: 80 })}
            className="w-full rounded-2xl border border-dark/15 px-4 py-3 outline-none transition focus:border-accent"
          />
          {errors.name ? <p className="mt-2 text-sm text-red-500">Please share your name.</p> : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-dark/70">
            Work email
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            {...register("email", { required: true })}
            className="w-full rounded-2xl border border-dark/15 px-4 py-3 outline-none transition focus:border-accent"
          />
          {errors.email ? <p className="mt-2 text-sm text-red-500">Please share a valid email.</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-dark/70">
          WhatsApp or phone number
        </label>
        <input
          id="contact-phone"
          type="tel"
          placeholder="+91 98765 43210"
          {...register("phone_number", { required: true })}
          className="w-full rounded-2xl border border-dark/15 px-4 py-3 outline-none transition focus:border-accent"
        />
        {errors.phone_number ? <p className="mt-2 text-sm text-red-500">Please share a contact number.</p> : null}
      </div>

      <div>
        <label htmlFor="contact-details" className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-dark/70">
          What would you like to review?
        </label>
        <textarea
          id="contact-details"
          {...register("project_details", { required: true })}
          placeholder="Tell us about your research, broker workflow, platform needs, or risk-control questions."
          rows={5}
          className="w-full rounded-2xl border border-dark/15 px-4 py-3 outline-none transition focus:border-accent"
        />
        {errors.project_details ? <p className="mt-2 text-sm text-red-500">Please add a short project summary.</p> : null}
      </div>

      <input
        type="submit"
        value="Send request"
        className="inline-block cursor-pointer rounded-2xl bg-dark px-6 py-3 text-lg font-semibold text-light transition hover:bg-dark/85"
      />
    </form>
  );
}
