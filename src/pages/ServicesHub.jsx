import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_HREF, PHONE } from "@/lib/constants";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import SectionLabel from "@/components/shared/SectionLabel";
import HomeCTAStrip from "@/components/home/HomeCTAStrip";
import { SERVICES, IMAGES } from "@/lib/constants";

export default function ServicesHub() {
  return (
    <>
      <PageHero
        title="Professional Painting & Flooring Services in Houston, TX"
        subtitle="We handle every aspect of your project — from surface prep to the final coat — with consistent quality and reliability."
        image={IMAGES.heroInterior}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              What We Offer
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Expert painting and flooring — delivered by one team, coordinated through our trusted network, with full accountability from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-accent/40 transition-all duration-200"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} in Houston TX`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-150">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-accent text-sm font-semibold">
                      View Service Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network callout */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            Need More Than One Service?
          </h2>
          <p className="text-white/70 leading-relaxed mb-7">
            Best Solution Distribution goes beyond individual services. Through our trusted network, we coordinate the additional work your project requires — ensuring everything is completed efficiently and to a consistent standard.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-7 py-3.5 rounded text-base transition-colors duration-150"
            >
              View Complete Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded text-base hover:bg-white/10 transition-colors duration-150"
            >
              <Phone className="w-4 h-4" /> Call Now: {PHONE}
            </a>
          </div>
        </div>
      </section>

      <HomeCTAStrip />
    </>
  );
}