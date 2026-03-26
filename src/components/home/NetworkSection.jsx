import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";

const pillars = [
  { icon: Users, title: "One Point of Contact", desc: "No juggling contractors. You work with us — we coordinate everything else." },
  { icon: Layers, title: "Coordinated Execution", desc: "Every trade and service is managed in sequence so your project runs smoothly." },
  { icon: ShieldCheck, title: "Trusted Network", desc: "Every partner in our network is vetted, insured, and held to our standards." },
  { icon: CheckCircle2, title: "Full Accountability", desc: "We own the outcome from start to finish — not just our piece of it." },
];

export default function NetworkSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel>The Best Solution Network</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-snug">
              More Than Painting & Flooring —<br />
              <span className="text-accent">The Best Solution for Every Project</span>
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed">
              At Best Solution Distribution, we operate as a coordinated solution network — delivering expert painting and flooring services while managing the additional services your project requires. Instead of juggling multiple contractors, you get one team focused on delivering the best outcome from start to finish.
            </p>
            <Link
              to="/solutions"
              className="mt-8 inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-7 py-3.5 rounded text-base transition-colors duration-150"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-5"
                >
                  <Icon className="w-6 h-6 text-accent mb-3" />
                  <p className="font-semibold text-white text-sm mb-1">{p.title}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}