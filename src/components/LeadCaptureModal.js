"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const DISABLE_COOKIE_NAME = "radii-lead-capture-disabled";
const SUBMITTED_COOKIE_NAME = "radii-lead-capture-submitted";
const MODAL_DELAY_MS = 25 * 1000;
const DISABLE_COOKIE_DURATION_MS = 48 * 60 * 60 * 1000;

const defaultValues = {
  name: "",
  email: "",
  phone_number: "",
};

function hasCookie(cookieName) {
  if (typeof document === "undefined") {
    return false;
  }

  return document.cookie
    .split(";")
    .some((cookie) => cookie.trim().startsWith(`${cookieName}=true`));
}

function setCookie(cookieName, expiresAt) {
  if (typeof document === "undefined") {
    return;
  }

  const expires = expiresAt.toUTCString();
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${cookieName}=true; expires=${expires}; path=/; SameSite=Lax${secure}`;
}

function setDisableCookie() {
  setCookie(
    DISABLE_COOKIE_NAME,
    new Date(Date.now() + DISABLE_COOKIE_DURATION_MS)
  );
}

function setSubmittedCookie() {
  const expiresAt = new Date();
  expiresAt.setMonth(expiresAt.getMonth() + 6);
  setCookie(SUBMITTED_COOKIE_NAME, expiresAt);
}

export default function LeadCaptureModal() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return undefined;
    }

    setIsVisible(false);
    reset(defaultValues);

    if (hasCookie(DISABLE_COOKIE_NAME) || hasCookie(SUBMITTED_COOKIE_NAME)) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      if (!hasCookie(DISABLE_COOKIE_NAME) && !hasCookie(SUBMITTED_COOKIE_NAME)) {
        setIsVisible(true);
      }
    }, MODAL_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [isMounted, pathname, reset]);

  const closeForNow = () => {
    setIsVisible(false);
  };

  const disableFor48Hours = () => {
    setDisableCookie();
    setIsVisible(false);
    toast.success("Lead form disabled for 48 hours.");
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          submission_type: "lead_capture_modal",
          source_page: pathname,
          project_details: `Lead captured from timed website modal on ${pathname}.`,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit lead.");
      }

      setSubmittedCookie();
      setIsVisible(false);
      reset(defaultValues);
      toast.success("Thanks! We'll reach out to you shortly.");
    } catch (error) {
      console.error("Error submitting lead form:", error);
      toast.error("We couldn't save your details. Please try again.");
    }
  };

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/70 px-4 py-8 backdrop-blur-sm">
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] dark:bg-dark">
          <button
            type="button"
            onClick={closeForNow}
            aria-label="Close lead capture form"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-mediumGray/30 text-xl leading-none text-mediumGray transition hover:border-accent hover:text-accent"
          >
            &times;
          </button>

          <div className="pr-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Let&apos;s connect
            </p>
            <h2 className="mt-3 font-in text-2xl font-semibold text-dark dark:text-light">
              Share your details and we&apos;ll get in touch.
            </h2>
            <p className="mt-2 text-sm leading-6 text-mediumGray">
              Please leave your name, contact email, and WhatsApp number with
              country code.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="lead-name"
                className="mb-2 block text-sm font-medium text-dark dark:text-light"
              >
                Name
              </label>
              <input
                id="lead-name"
                type="text"
                placeholder="Your full name"
                autoComplete="name"
                {...register("name", {
                  required: "Please enter your name.",
                  maxLength: {
                    value: 80,
                    message: "Name must be 80 characters or fewer.",
                  },
                })}
                className="w-full rounded-2xl border border-black/10 bg-light px-4 py-3 text-base text-dark outline-none transition focus:border-accent focus:ring-0 dark:border-white/15 dark:bg-white/5 dark:text-light"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="lead-email"
                className="mb-2 block text-sm font-medium text-dark dark:text-light"
              >
                Contact email
              </label>
              <input
                id="lead-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                {...register("email", {
                  required: "Please enter your email address.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
                className="w-full rounded-2xl border border-black/10 bg-light px-4 py-3 text-base text-dark outline-none transition focus:border-accent focus:ring-0 dark:border-white/15 dark:bg-white/5 dark:text-light"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="lead-phone"
                className="mb-2 block text-sm font-medium text-dark dark:text-light"
              >
                WhatsApp number with country code
              </label>
              <input
                id="lead-phone"
                type="tel"
                inputMode="tel"
                placeholder="+91 98765 43210"
                autoComplete="tel"
                {...register("phone_number", {
                  required: "Please enter your WhatsApp number.",
                  pattern: {
                    value: /^\+[1-9][\d\s()-]{6,20}$/,
                    message:
                      "Use your country code, for example +91 98765 43210.",
                  },
                })}
                className="w-full rounded-2xl border border-black/10 bg-light px-4 py-3 text-base text-dark outline-none transition focus:border-accent focus:ring-0 dark:border-white/15 dark:bg-white/5 dark:text-light"
              />
              {errors.phone_number && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.phone_number.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-accent px-4 py-3 text-base font-semibold text-light transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit details"}
            </button>
          </form>
        </div>

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={disableFor48Hours}
            className="text-sm font-medium text-light underline underline-offset-4 transition hover:text-accentDark"
          >
            Disable this popup for 48 hours
          </button>
        </div>
      </div>
    </div>
  );
}
