import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const reviews = [
  {
    name: "Marcus T.",
    location: "Katy, TX",
    text: "Best Solution did our entire interior — living room, hallways, bedrooms. Incredibly clean work. They protected all the furniture, finished ahead of schedule, and the results were flawless.",
    service: "Interior Painting",
  },
  {
    name: "Patricia R.",
    location: "Sugar Land, TX",
    text: "Had them do our exterior and install LVP flooring throughout. The crew was professional, courteous, and the quality is outstanding. Neighbors keep asking who we used.",
    service: "Exterior + Flooring",
  },
  {
    name: "David K.",
    location: "Pearland, TX",
    text: "We manage a commercial office complex and Best Solution has been our go-to for two years. Always on time, no disruption to our tenants, and the pricing is fair and transparent.",
    service: "Commercial Painting",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            What Houston Homeowners Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <Quote className="w-6 h-6 text-accent/40 mb-3" />
              <p className="text-foreground/75 text-sm leading-relaxed">"{r.text}"</p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="text-muted-foreground text-xs">{r.location} · {r.service}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}