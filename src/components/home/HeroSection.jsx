import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { PHONE, PHONE_HREF, IMAGES } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background */}
      <img
        src={IMAGES.heroInterior}
        alt="Professional interior painting by Best Solution Distribution Houston TX"
        className="absolute inset-0 w-full h-full object-cover"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/78 to-primary/25" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
        <div className="max-w-[600px]">
          {/* Star / social proof */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-white/70 text-sm">5-Star Rated · Houston, TX</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-[56px] text-white leading-tight"
          >
            Houston's Trusted
            <br />
            <span className="text-accent">Painting &amp; Flooring</span>
            <br />
            Experts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 text-white/75 text-lg leading-relaxed max-w-[520px]"
          >
            Interior &amp; exterior painting, residential &amp; commercial projects, and professional flooring — one team managing every detail, from start to finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-7 py-3.5 rounded text-base transition-colors duration-150"
            >
              Schedule Your Free Estimate Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded text-base transition-colors duration-150"
            >
              <Phone className="w-4 h-4" />
              Call Now: {PHONE}
            </a>
          </motion.div>

          {/* Quick trust hints */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-white/55 text-sm"
          >
            <span>✓ Licensed &amp; Insured</span>
            <span>✓ Free Estimates</span>
            <span>✓ Local Houston Business</span>
            <span>✓ One Team, Complete Solutions</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}