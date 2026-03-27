import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const reviews = [
  {
    name: "Max M.",
    location: "Tomball, TX",
    text: "We hired Best Solution Distribution for a full exterior paint job along with some siding repairs, and the results exceeded our expectations. They didn’t just paint over issues — they took the time to properly repair damaged sections of siding and prep everything the right way.\n\nThe crew was professional, showed up on time every day, and kept the job site clean throughout the project. The finished product looks incredible, and you can tell the quality is going to last.\n\nIf you’re looking for a company that does things the right way instead of cutting corners, I highly recommend them.",
    service: "Exterior Painting & Siding Repairs",
  },
  {
    name: "Patrick C.",
    location: "Magnolia, TX",
    text: "We had a rental property that was in rough shape after a tenant moved out — scuffed walls, stains, and overall wear and tear throughout the house. Best Solution Distribution came in and completely transformed the space.\n\nThey handled all the prep work, covered everything properly, and delivered a clean, consistent finish in every room. The place honestly looks better than it did before.\n\nThe turnaround time was fast, communication was clear, and the quality of work was exactly what we needed to get the property ready for the next tenant. We’ll definitely be using them again.",
    service: "Interior Painting – Rental Property Turnover",
  },
  {
    name: "David K.",
    location: "Pearland, TX",
    text: "We had an epoxy coating applied to our 2-car garage, and the difference is night and day. The floor went from stained and worn out to a clean, professional-looking finish that completely upgraded the space.\n\nThey took the time to prep the surface properly, which you can tell makes a huge difference in how the coating turned out. The finish is smooth, durable, and easy to maintain.\n\nThe team was efficient, knowledgeable, and clearly takes pride in their work. Highly recommend if you’re considering epoxy for your garage.",
    service: "Epoxy Garage Coating",
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