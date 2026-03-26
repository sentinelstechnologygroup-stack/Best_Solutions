import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { IMAGES } from "@/lib/constants";
import { EstimateButton, CallButtonDark } from "@/components/shared/CTAButton";

const points = [
  { title: "Premium Materials Only", desc: "We use top-rated paints and flooring products — nothing off-brand or cut-rate." },
  { title: "Thorough Job Prep", desc: "Proper prep is the difference between a finish that lasts and one that doesn't." },
  { title: "Clean Workmanship", desc: "We protect your home and leave every room cleaner than we found it." },
  { title: "Transparent Pricing", desc: "No surprise invoices. Your estimate is your price — period." },
  { title: "Reliable Scheduling", desc: "We show up when promised and finish on time, every time." },
  { title: "One Team, Full Accountability", desc: "We don't just complete our piece — we deliver the best solution for your whole project." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src={IMAGES.residential}
              alt="Best Solution Distribution Houston painting crew"
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 bg-primary/90 backdrop-blur-sm rounded-lg px-5 py-4 max-w-[280px]">
              <p className="font-display font-bold text-white text-2xl">10+</p>
              <p className="text-white/70 text-sm">Years serving Houston homeowners &amp; businesses</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              The Best Solution Difference
            </h2>
            <p className="mt-3 text-muted-foreground">
              We don't just complete jobs — we deliver the best solution for your project. One point of contact, coordinated through our trusted network, accountable from start to finish.
            </p>

            <ul className="mt-7 space-y-4">
              {points.map((point, i) => (
                <motion.li
                  key={point.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{point.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <EstimateButton />
              <CallButtonDark />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}