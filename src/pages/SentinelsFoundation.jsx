// src/pages/SentinelsFoundation.jsx
import React, { useState } from "react";
import { ArrowRight, HeartHandshake, Shield, Dog, Users, Check } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/xbdplyzz";

export default function SentinelsFoundation() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("_subject", "Best Solution Distribution - New Sentinels Foundation Signup");
    formData.append("source_page", "Sentinels Foundation Landing Page");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2341] via-[#11284a] to-[#0b1d36] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(253,255,46,0.08),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E8AC2F]">
                Sentinels Foundation
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Supporting K9 rescue and mission-driven service.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Sentinels Foundation is being built to support canine rescue,
                community-centered service initiatives, and long-term mission development.
                This page is the first step in connecting early supporters, partners, and future volunteers.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#join"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E8AC2F] px-6 py-3 font-semibold text-[#0f2341] transition hover:brightness-95"
                >
                  Join the Mission
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#E8AC2F]" />
                  Early supporter updates
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#E8AC2F]" />
                  Future fundraising outreach
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#E8AC2F]" />
                  Volunteer and partner interest
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#E8AC2F]" />
                  Mission launch notifications
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="/images/mission_banner/sentinels-foundation-k9badge.png"
                alt="Sentinels Foundation badge"
                className="w-[260px] max-w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] md:w-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-5 text-center sm:grid-cols-3 sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <Shield className="h-5 w-5 text-[#0f2341]" />
            <span className="text-sm font-medium text-slate-700">
              Mission-Oriented Foundation Build
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <Dog className="h-5 w-5 text-[#0f2341]" />
            <span className="text-sm font-medium text-slate-700">
              K9 Rescue Focus
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <HeartHandshake className="h-5 w-5 text-[#0f2341]" />
            <span className="text-sm font-medium text-slate-700">
              Community Support Initiative
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d1a600]">
              About the Foundation
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Building a strong foundation before full launch.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Sentinels Foundation is in the early development phase, focused on establishing
              support, awareness, and future fundraising momentum around a mission rooted in
              canine rescue and service-minded community work.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              This page is designed to give supporters a direct place to connect now, so they can
              stay informed, get involved, and be part of the mission as it grows.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d1a600]">
              Current Focus
            </p>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E8AC2F]" />
                <span>Build awareness and establish early mission support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E8AC2F]" />
                <span>Create a contact base for future fundraising and outreach</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E8AC2F]" />
                <span>Connect with community-minded supporters and partners</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E8AC2F]" />
                <span>Prepare for long-term mission development and launch growth</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUPPORT WAYS */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d1a600]">
              Ways to Support
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              There are meaningful ways to support right now.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Even before full launch, early visibility and interest help create the momentum needed
              to build a durable mission.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-xl bg-[#0f2341]/10 p-3">
                <Users className="h-6 w-6 text-[#0f2341]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Stay Connected
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Join the list to receive updates, launch news, and future opportunities to help.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-xl bg-[#0f2341]/10 p-3">
                <HeartHandshake className="h-6 w-6 text-[#0f2341]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Partner Early
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Businesses and aligned supporters can connect early as the mission grows.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-xl bg-[#0f2341]/10 p-3">
                <Dog className="h-6 w-6 text-[#0f2341]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Support the Mission
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Help build momentum for the future of K9 rescue and related mission initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN FORM */}
      <section id="join" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d1a600]">
            Join the Mission
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Stay informed as the foundation grows.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Sign up to receive updates, future fundraising announcements, and opportunities
            to support the mission.
          </p>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            {submitted ? (
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Check className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  You’re on the list.
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Thank you for supporting the Sentinels Foundation mission.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4 text-left">
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#0f2341]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#0f2341]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    How would you like to support?
                  </label>
                  <select
                    name="interest"
                    className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#0f2341]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="updates">General updates</option>
                    <option value="volunteer">Volunteer interest</option>
                    <option value="partnership">Partnership interest</option>
                    <option value="fundraising">Future fundraising support</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#0f2341] px-6 py-3 font-semibold text-white transition hover:bg-[#0c2039] disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Join the Mission"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SUPPORT STRIP */}
      <section className="bg-[#0f2341] py-14 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E8AC2F]">
            Community Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Supported by Sentinels Design Lab
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/80">
            Sentinels Design Lab proudly supports the early development and visibility of
            Sentinels Foundation as part of a broader mission to create meaningful, durable impact.
          </p>
        </div>
      </section>
    </div>
  );
}