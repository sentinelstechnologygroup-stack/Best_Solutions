import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Search, HardHat, ThumbsUp } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Request an Estimate",
    desc: "Call us or fill out our online form. Tell us about your project — size, scope, and any timeline requirements.",
  },
  {
    icon: Search,
    num: "02",
    title: "On-Site Evaluation",
    desc: "We visit your property to assess the work, discuss materials, and provide a detailed, transparent written quote.",
  },
  {
    icon: HardHat,
    num: "03",
    title: "Project Execution",
    desc: "Our experienced crew gets to work — on time, with proper prep, clean execution, and zero shortcuts.",
  },
  {
    icon: ThumbsUp,
    num: "04",
    title: "Final Walkthrough",
    desc: "We walk through the finished project with you to ensure every detail meets your expectations before we leave.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Simple 4-Step Process
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            From first contact to final walkthrough — we make the process smooth and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10 z-0" style={{ width: "calc(100% - 2rem)" }} />
              )}
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/8 transition-colors duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-display font-bold text-3xl text-white/15">{step.num}</span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}