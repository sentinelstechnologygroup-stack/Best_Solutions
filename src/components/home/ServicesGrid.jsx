import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import SectionLabel from "@/components/shared/SectionLabel";

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Professional Services in Houston, TX
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-base">
            From a single room refresh to a full commercial build-out — we bring quality craftsmanship to every job.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} Houston TX`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors duration-150">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-accent text-sm font-semibold">
                    Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}