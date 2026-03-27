// src/components/shared/ContactForm.jsx
import React, { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

const SERVICE_OPTIONS = [
  "Interior Painting",
  "Exterior Painting",
  "Residential Painting",
  "Commercial Painting",
  "Flooring Installation",
  "Drywall Repair",
  "Pressure Washing",
  "Cabinet Painting",
  "Not Sure",
];

const INITIAL_FORM = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  details: "",
};

function formatPageSource(pathname) {
  if (!pathname || pathname === "/") return "Homepage Form";

  const cleaned = pathname
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .filter(Boolean)
    .map((part) =>
      part
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())
    )
    .join(" / ");

  return `${cleaned} Form`;
}

export default function ContactForm({
  formTitle = "Request Free Estimate",
  submitLabel = "Request Free Estimate",
}) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const pageMeta = useMemo(() => {
    if (typeof window === "undefined") {
      return {
        siteDomain: "",
        pageUrl: "",
        pagePath: "",
        pageTitle: "",
        leadSource: "Website Form",
      };
    }

    const siteDomain = window.location.origin || "";
    const pageUrl = window.location.href || "";
    const pagePath = window.location.pathname || "";
    const pageTitle = document.title || "";
    const leadSource = formatPageSource(pagePath);

    return {
      siteDomain,
      pageUrl,
      pagePath,
      pageTitle,
      leadSource,
    };
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const payload = {
        "Full Name": formData.fullName,
        "Phone Number": formData.phone,
        "Email Address": formData.email,
        "Service Needed": formData.service,
        "Project Details": formData.details,
        "Form Title": formTitle,
        "Lead Source": pageMeta.leadSource,
        "Site Domain": pageMeta.siteDomain,
        "Page Path": pageMeta.pagePath,
        "Page URL": pageMeta.pageUrl,
        "Page Title": pageMeta.pageTitle,
        _subject: `${formTitle} — ${formData.fullName || "New Lead"} — ${pageMeta.pagePath || pageMeta.leadSource}`,
      };

      const response = await fetch("https://formspree.io/f/xbdplyzz", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error || "Form submission failed.");
      }

      setStatus({
        type: "success",
        message:
          "Thanks — your request has been sent. We’ll review your project and get back to you within 24 hours.",
      });

      setFormData(INITIAL_FORM);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error?.message ||
          "Something went wrong while sending your request. Please call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      {status.message ? (
        <div
          className={`rounded-lg border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Smith"
            className="h-12 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-accent"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(713) 555-0100"
            className="h-12 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-foreground"
        >
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="h-12 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-accent"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-semibold text-foreground"
        >
          Service Needed *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="h-12 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-accent"
        >
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="details"
          className="mb-2 block text-sm font-semibold text-foreground"
        >
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          value={formData.details}
          onChange={handleChange}
          placeholder="Tell us about the project, timeline, property type, and anything else we should know."
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : submitLabel}
        {!isSubmitting ? <ArrowRight className="h-4 w-4" /> : null}
      </button>
    </form>
  );
}