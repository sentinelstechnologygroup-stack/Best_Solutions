// src/components/shared/ContactForm.jsx
import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { EMAIL } from "@/lib/constants";

const SERVICES = [
  "Interior Painting",
  "Exterior Painting",
  "Residential Painting",
  "Commercial Painting",
  "Flooring Installation",
  "Epoxy / Garage Coating",
  "Other / Not Sure",
];

const EMPTY_FORM = {
  name: "",
  phone: "",
  email: "",
  service_type: "",
  message: "",
};

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const subject = encodeURIComponent(
        `New Estimate Request - ${form.service_type || "General Inquiry"}`
      );

      const body = encodeURIComponent(
        [
          `Name: ${form.name}`,
          `Phone: ${form.phone}`,
          `Email: ${form.email}`,
          `Service: ${form.service_type || "Not selected"}`,
          "",
          "Project Details:",
          form.message || "No message provided.",
        ].join("\n")
      );

      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setDone(true);
      setForm(EMPTY_FORM);
    } catch (error) {
      console.error("Contact form submission failed:", error);
      alert(
        "There was a problem opening your email app. Please call or email us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-accent" />
        </div>
        <div>
          <p className="font-display font-bold text-xl text-foreground">
            Request Started
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Your email app should have opened with your request details.
          </p>
        </div>
        <button
          onClick={() => {
            setDone(false);
            setForm(EMPTY_FORM);
          }}
          className="text-accent text-sm underline underline-offset-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div
        className={`grid gap-4 ${
          compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        <div>
          <label
            htmlFor="cf-name"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Full Name *
          </label>
          <input
            id="cf-name"
            required
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="John Smith"
            className="w-full border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors duration-150 bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="cf-phone"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Phone Number *
          </label>
          <input
            id="cf-phone"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="(713) 555-0100"
            className="w-full border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors duration-150 bg-white"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="cf-email"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Email Address *
        </label>
        <input
          id="cf-email"
          required
          type="email"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="you@example.com"
          className="w-full border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors duration-150 bg-white"
        />
      </div>

      <div>
        <label
          htmlFor="cf-service"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Service Needed *
        </label>
        <select
          id="cf-service"
          required
          value={form.service_type}
          onChange={(e) => set("service_type", e.target.value)}
          className="w-full border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors duration-150 bg-white"
        >
          <option value="">Select a service</option>
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Project Details
        </label>
        <textarea
          id="cf-message"
          rows={compact ? 4 : 5}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us about the project, timeline, property type, and anything else we should know."
          className="w-full border border-border rounded px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors duration-150 bg-white resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-95 transition disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Preparing Request...
          </>
        ) : (
          <>
            Request Free Estimate
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}