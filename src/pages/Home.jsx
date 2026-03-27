// src/pages/Home.jsx

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
// import BeforeAfter from "@/components/home/BeforeAfter"; ❌ REMOVE
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import ServiceAreaSection from "@/components/home/ServiceAreaSection";
import HomeCTAStrip from "@/components/home/HomeCTAStrip";
import NetworkSection from "@/components/home/NetworkSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />

      {/* SERVICES */}
      <ServicesGrid />

      {/* 🔥 NEW — BENJAMIN MOORE AUTHORITY SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm text-orange-500 font-semibold uppercase tracking-wide mb-2">
              Premium Materials
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Authorized Dealer of Benjamin Moore Paints
            </h2>

            <p className="text-gray-600 mb-4">
              We are an authorized Benjamin Moore retailer, providing access to one of the most trusted paint brands in the industry.
            </p>

            <p className="text-gray-600 mb-6">
              From rich, consistent color to long-lasting durability, we use premium materials that deliver results you can see and performance you can rely on.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Premium-quality paints trusted by professionals</li>
              <li>✔ Superior coverage and long-lasting finish</li>
              <li>✔ Wide range of colors and finishes</li>
              <li>✔ Ideal for both residential and commercial projects</li>
            </ul>
          </div>

          {/* RIGHT IMAGE (SAFE PLACEHOLDER) */}
          <div>
            <img
              src="/images/benjamin-moore-logo.png"
              alt="Professional painting with premium materials"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ❌ REMOVE WEAK PROJECT SECTION */}
      {/* <BeforeAfter /> */}

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* PROCESS */}
      <ProcessSection />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* SERVICE AREA */}
      <ServiceAreaSection />

      {/* NETWORK / DIFFERENTIATOR */}
      <NetworkSection />

      {/* CTA */}
      <HomeCTAStrip />
    </div>
  );
}