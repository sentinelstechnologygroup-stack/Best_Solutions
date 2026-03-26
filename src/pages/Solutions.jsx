import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Layers, ShieldCheck, CheckCircle2, Wrench, Paintbrush, Zap } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import SectionLabel from "@/components/shared/SectionLabel";
import HomeCTAStrip from "@/components/home/HomeCTAStrip";
import { IMAGES } from "@/lib/constants";

const howItWorks = [
  { step: "01", title: "Single Point of Contact", desc: "You reach out to us — we handle the rest. No tracking down multiple contractors or managing separate timelines." },
  { step: "02", title: "We Assess Your Full Scope", desc: "We evaluate what your project truly requires — beyond just painting or flooring — and map out the right sequence of work." },
  { step: "03", title: "Network Coordination", desc: "Where specialized trades are needed, we bring in vetted professionals from our trusted network, managed by us." },
  { step: "04", title: "One Accountable Team", desc: "We stay engaged from start to finish, ensuring every part of the project meets our standard — not just our portion of it." },
];

const solutions = [
  { icon: Paintbrush, title: "Painting & Coatings", desc: "Interior, exterior, residential, commercial, and specialty coatings — our core expertise." },
  { icon: Layers, title: "Flooring", desc: "Hardwood, LVP, tile, and epoxy — installed right, from subfloor to finish trim." },
  { icon: Wrench, title: "Project Coordination", desc: "We manage the sequence of trades so your project flows from one phase to the next without gaps." },
  { icon: Zap, title: "Full Renovation Support", desc: "For larger renovation projects, we coordinate additional services through our trusted professional network." },
  { icon: Users, title: "Trusted Partner Network", desc: "Every partner we work with is vetted, insured, and held to the same standards we hold ourselves to." },
  { icon: ShieldCheck, title: "Accountability from Start to Finish", desc: "We don't walk away when our scope is done. We stay involved until the entire project is complete." },
];

export default function Solutions() {
  return (
    <>
      <PageHero
        title="The Best Solution Network"
        subtitle="One team. One point of contact. Every service your project requires — coordinated and delivered to a consistent standard."
        image={IMAGES.heroInterior}
      />

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-5">
            Beyond Individual Services
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Best Solution Distribution was built to solve a real problem: great tradespeople who only handle their one thing, leaving clients to coordinate the rest alone. We operate differently. Through our solution network, we deliver our core services — painting and flooring — and coordinate the additional work your project requires, managed under one roof with one standard of accountability.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Simple. Coordinated. Accountable.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <p className="font-display font-bold text-4xl text-accent/25 mb-3">{item.step}</p>
                <h3 className="font-display font-bold text-base text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel>Our Solutions</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Everything Your Project Needs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready to Get the Best Solution?
          </h2>
          <p className="text-white/65 leading-relaxed mb-8">
            Tell us about your project and we'll put together a coordinated plan — painting, flooring, or anything else your project requires.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3.5 rounded text-base transition-colors duration-150"
            >
              Get the Best Solution
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded text-base hover:bg-white/10 transition-colors duration-150"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <HomeCTAStrip />
    </>
  );
}