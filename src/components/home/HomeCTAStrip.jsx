import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function HomeCTAStrip() {
  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-3">Limited Availability — Schedule Today</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
          Ready to Get the Best Solution?
        </h2>
        <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
          One team. One point of contact. Complete project solutions — painting, flooring, and everything your project requires.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-accent font-bold px-8 py-3.5 rounded text-base hover:bg-white/90 transition-colors duration-150"
          >
            Get Free Estimate <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-bold px-8 py-3.5 rounded text-base hover:bg-white/10 transition-colors duration-150"
          >
            <Phone className="w-4 h-4" /> Call Now: {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}