import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionLabel from "@/components/shared/SectionLabel";
import { EstimateButton, CallButtonDark } from "@/components/shared/CTAButton";
import HomeCTAStrip from "@/components/home/HomeCTAStrip";
import { IMAGES } from "@/lib/constants";

const values = [
  "Quality over speed — we never rush at the expense of the finish",
  "Honest, upfront pricing with no hidden fees",
  "Clean, respectful job sites from start to finish",
  "We stand behind every project we complete",
  "Experienced crews on every job — no subcontracting surprises",
  "Always available to answer questions throughout your project",
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Best Solution Distribution"
        subtitle="A locally-owned Houston painting and flooring company built on quality, honesty, and results."
        image={IMAGES.heroInterior}
      />

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <img
                src={IMAGES.heroExterior}
                alt="Best Solution Distribution Houston painting crew"
                className="rounded-lg w-full h-[400px] object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Houston's Painting &amp; Flooring Professionals
              </h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Best Solution Distribution was founded with a single mission: deliver professional-grade painting and flooring results to Houston homeowners, property managers, and commercial clients — without the headaches typically associated with contractors.
                </p>
                <p>
                  We specialize in interior and exterior painting, residential and commercial projects, and full flooring installation including hardwood, luxury vinyl plank, tile, and epoxy garage coatings. From a quick refresh to a full property transformation, we bring the same level of care and craftsmanship to every job.
                </p>
                <p>
                  What sets us apart is our network. Beyond our core services, we operate as a trusted hub of skilled professionals and specialized partners — giving clients access to the right expertise for virtually any project scope.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <EstimateButton />
                <CallButtonDark />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionLabel>Our Values</SectionLabel>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                How We Work
              </h2>
              <p className="mt-4 text-muted-foreground">
                Everything we do is guided by a commitment to quality craftsmanship, clear communication, and genuine care for the client.
              </p>
              <ul className="mt-7 space-y-3">
                {values.map((v, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{v}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={IMAGES.flooring}
                alt="Professional flooring installation"
                className="rounded-lg w-full h-[380px] object-cover"
                loading="lazy"
              />
              <div className="absolute top-5 right-5 bg-accent text-white rounded-lg px-5 py-4 text-center shadow-xl">
                <p className="font-display font-bold text-3xl">500+</p>
                <p className="text-white/80 text-sm">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeCTAStrip />
    </>
  );
}