// src/pages/SDLContact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const FORMSPREE_CONTACT_ENDPOINT = "https://formspree.io/f/mnjgoknr";

const industryOptions = [
  "Home Services",
  "Construction",
  "Real Estate",
  "Professional Services",
  "Healthcare",
  "Retail / E-Commerce",
  "Nonprofit",
  "Technology",
  "Other",
];

const projectTypeOptions = [
  "Website Redesign",
  "New Website Build",
  "Landing Page",
  "Brand / Messaging",
  "SEO / Growth",
  "Automation / Systems",
  "AI / Workflow Support",
  "Other",
];

const budgetOptions = [
  "Under $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP",
  "Within 30 Days",
  "1–3 Months",
  "3+ Months",
  "Flexible",
];

export default function SDLContact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(FORMSPREE_CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "New SDL Project Inquiry",
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          industry: form.industry,
          project_type: form.projectType,
          budget: form.budget,
          timeline: form.timeline,
          project_description: form.description,
          source_page: "SDL Contact",
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        industry: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      });

      toast.success("Project inquiry sent.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20";

  const labelClass =
    "mb-2 block text-[11px] uppercase tracking-[0.14em] text-white/35";

  return (
    <section className="min-h-screen bg-[#07070d] pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
            Start a Project
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-[0.95] tracking-tight text-white md:text-6xl">
            Let&apos;s build something exceptional.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
            Tell us about your project and we&apos;ll schedule a consultation to
            discuss the best approach for your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mt-14"
        >
          {submitted ? (
            <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-white/5 bg-[#0d0d14] p-10">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
                  <Check className="h-7 w-7 text-emerald-400" />
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  Inquiry sent.
                </h2>

                <p className="mt-3 text-sm text-white/45">
                  We&apos;ll review your project details and follow up soon.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    placeholder="Company name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="(555) 000-0000"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="industry" className={labelClass}>
                    Industry
                  </label>
                  <select
                    id="industry"
                    value={form.industry}
                    onChange={(e) => updateField("industry", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select industry</option>
                    {industryOptions.map((option) => (
                      <option key={option} value={option} className="text-black">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="projectType" className={labelClass}>
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={form.projectType}
                    onChange={(e) => updateField("projectType", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select type</option>
                    {projectTypeOptions.map((option) => (
                      <option key={option} value={option} className="text-black">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) => updateField("budget", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select budget</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option} className="text-black">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className={labelClass}>
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    value={form.timeline}
                    onChange={(e) => updateField("timeline", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option} className="text-black">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className={labelClass}>
                  Project Description
                </label>
                <textarea
                  id="description"
                  rows={5}
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-[#07070d] transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Schedule Consultation
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}