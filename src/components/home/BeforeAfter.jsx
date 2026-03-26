import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { IMAGES } from "@/lib/constants";
import { EstimateButton } from "@/components/shared/CTAButton";

const projects = [
  { label: "Interior Transformation", image: IMAGES.heroInterior, tag: "Interior Painting" },
  { label: "Exterior Refresh", image: IMAGES.heroExterior, tag: "Exterior Painting" },
  { label: "Hardwood Installation", image: IMAGES.hardwood, tag: "Flooring" },
  { label: "Epoxy Garage Coating", image: IMAGES.epoxy, tag: "Epoxy Coating" },
  { label: "Commercial Project", image: IMAGES.commercial, tag: "Commercial" },
  { label: "LVP Flooring", image: IMAGES.flooring, tag: "Flooring" },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Recent Projects in Houston
            </h2>
          </div>
          <EstimateButton />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded mb-1">
                  {project.tag}
                </span>
                <p className="text-white font-semibold text-sm">{project.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}