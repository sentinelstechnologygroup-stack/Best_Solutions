import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import SectionLabel from "@/components/shared/SectionLabel";
import HomeCTAStrip from "@/components/home/HomeCTAStrip";
import { IMAGES } from "@/lib/constants";

const ALL_PROJECTS = [
  { id: 1, title: "Living Room Interior Refresh", category: "Interior Painting", image: IMAGES.heroInterior, location: "Katy, TX" },
  { id: 2, title: "Exterior Repaint", category: "Exterior Painting", image: IMAGES.heroExterior, location: "Sugar Land, TX" },
  { id: 3, title: "LVP Flooring Installation", category: "Flooring", image: IMAGES.flooring, location: "Pearland, TX" },
  { id: 4, title: "Epoxy Garage Coating", category: "Epoxy Coating", image: IMAGES.epoxy, location: "Houston, TX" },
  { id: 5, title: "Commercial Office Paint", category: "Commercial Painting", image: IMAGES.commercial, location: "Houston, TX" },
  { id: 6, title: "Hardwood Floor Install", category: "Flooring", image: IMAGES.hardwood, location: "The Woodlands, TX" },
  { id: 7, title: "Residential Exterior", category: "Exterior Painting", image: IMAGES.residential, location: "Friendswood, TX" },
  { id: 8, title: "Before & After Renovation", category: "Interior Painting", image: IMAGES.beforeAfter, location: "Humble, TX" },
];

const FILTERS = ["All", "Interior Painting", "Exterior Painting", "Flooring", "Epoxy Coating", "Commercial Painting"];

export default function Gallery() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        title="Project Gallery"
        subtitle="A showcase of recent painting and flooring projects across Houston and surrounding areas."
        image={IMAGES.heroInterior}
        showCTAs={false}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Recent Completed Projects
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 cursor-pointer ${
                  active === f
                    ? "bg-accent text-white"
                    : "bg-secondary text-foreground hover:bg-muted border border-border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-lg overflow-hidden aspect-[4/3] bg-muted"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/55 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded mb-1.5 self-start">
                      {project.category}
                    </span>
                    <p className="text-white font-semibold text-sm">{project.title}</p>
                    <p className="text-white/70 text-xs">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <HomeCTAStrip />
    </>
  );
}