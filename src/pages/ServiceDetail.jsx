import React from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import SectionLabel from "@/components/shared/SectionLabel";
import ContactForm from "@/components/shared/ContactForm";
import HomeCTAStrip from "@/components/home/HomeCTAStrip";
import { SERVICES, IMAGES, PHONE, PHONE_HREF } from "@/lib/constants";

const SERVICE_DETAILS = {
  "interior-painting": {
    h1: "Interior Painting Services in Houston, TX",
    subtitle: "Flawless walls, ceilings, trim, and cabinets — delivered with premium paints and meticulous prep.",
    image: IMAGES.heroInterior,
    about: "Our Houston interior painting team handles every job with the same level of care — whether it's a single accent wall or a whole-home refresh. We prep every surface properly, use premium low-VOC paints, and protect your home throughout the process.",
    includes: [
      "Walls, ceilings, trim, baseboards & crown molding",
      "Cabinet painting and refinishing",
      "Thorough surface prep and priming",
      "Color consultation included",
      "Furniture & floor protection",
      "Eco-friendly, low-VOC paint options",
      "Final walkthrough before we leave",
    ],
    faq: [
      { q: "How long does interior painting take?", a: "Most single-room projects take 1–2 days. Whole-home projects typically take 3–7 days depending on size and scope." },
      { q: "Do I need to move furniture?", a: "We'll move light furniture and protect everything with drop cloths. For heavy items, we ask that you move them before we arrive." },
      { q: "What paint brands do you use?", a: "We use Sherwin-Williams, Benjamin Moore, and other premium brands — always matched to your project requirements." },
    ],
  },
  "exterior-painting": {
    h1: "Exterior Painting Services in Houston, TX",
    subtitle: "Weather-resistant exterior coatings that protect your home and boost curb appeal for years.",
    image: IMAGES.heroExterior,
    about: "Houston's climate demands tough exterior coatings. Our team power washes, preps, primes, and applies weather-resistant premium paints to keep your home protected from heat, humidity, and Texas storms.",
    includes: [
      "Power washing and surface cleaning",
      "Caulking, sealing & wood repairs",
      "Primer coat on all bare surfaces",
      "2-coat application on all surfaces",
      "Trim, shutters & accent details",
      "Multi-story capability with full safety equipment",
      "Post-job site cleanup",
    ],
    faq: [
      { q: "What's the best time to paint exteriors in Houston?", a: "Spring and fall offer ideal conditions. We work year-round and schedule around weather forecasts to protect your finish." },
      { q: "How long does exterior paint last?", a: "With proper prep and premium paint, expect 7–10 years of durability in Houston's climate." },
      { q: "Do you handle wood rot repair?", a: "Yes — we handle minor wood repairs before painting to ensure a sound, lasting finish." },
    ],
  },
  "residential-painting": {
    h1: "Residential Painting Services in Houston, TX",
    subtitle: "Complete interior and exterior painting solutions for Houston homeowners.",
    image: IMAGES.residential,
    about: "Whether you're moving in, selling, or simply refreshing your space — our residential painting service covers everything from a single room to your entire home. We make the process smooth, clean, and worry-free.",
    includes: [
      "Interior & exterior residential painting",
      "Single room to full-home projects",
      "New construction painting",
      "Move-in/move-out painting",
      "Pre-sale property refreshes",
      "Color selection consultation",
      "Flexible scheduling around your family",
    ],
    faq: [
      { q: "Can you match existing paint colors?", a: "Absolutely. We can match virtually any color with digital color-matching technology." },
      { q: "Do you work on weekends?", a: "Yes — we offer weekend scheduling to minimize disruption to your household." },
      { q: "Are you licensed and insured in Texas?", a: "Yes. We are fully licensed and carry liability insurance and workers' comp for all residential projects." },
    ],
  },
  "commercial-painting": {
    h1: "Commercial Painting Services in Houston, TX",
    subtitle: "Office, retail, industrial, and multi-unit commercial painting on your timeline.",
    image: IMAGES.commercial,
    about: "We understand that commercial painting projects need to be completed quickly, cleanly, and without disrupting your business. Our commercial team works after-hours, on weekends, or in phases to minimize downtime.",
    includes: [
      "Office buildings and retail spaces",
      "Warehouses and industrial facilities",
      "Multi-family and apartment complexes",
      "After-hours and weekend scheduling",
      "Multi-phase project management",
      "OSHA-compliant safety practices",
      "Dedicated project manager on every job",
    ],
    faq: [
      { q: "Can you work outside business hours?", a: "Yes — evening and weekend scheduling is available to eliminate disruption to your operation." },
      { q: "Do you handle large commercial buildings?", a: "Yes. We manage projects of all sizes, from small offices to multi-story commercial buildings." },
      { q: "Do you provide commercial insurance certificates?", a: "Absolutely. We provide all required documentation including COIs, safety plans, and licensing." },
    ],
  },
  "flooring-installation": {
    h1: "Flooring Installation Services in Houston, TX",
    subtitle: "Hardwood, luxury vinyl plank, tile, and epoxy — precision installation for any space.",
    image: IMAGES.flooring,
    about: "Our flooring installation team handles every material type with expert-level precision. From subfloor prep to the final trim, we ensure every square foot is installed correctly, seamlessly, and built to last.",
    includes: [
      "Hardwood and engineered wood installation",
      "Luxury Vinyl Plank (LVP) installation",
      "Ceramic and porcelain tile",
      "Subfloor preparation and leveling",
      "Transitions and trim installation",
      "Stair flooring and nosing",
      "Commercial-grade flooring options",
    ],
    faq: [
      { q: "How long does flooring installation take?", a: "A typical room takes 1–2 days. Whole-home projects are usually 3–5 days depending on size and material." },
      { q: "Do you remove old flooring?", a: "Yes — we handle full demo and haul-away of existing flooring as part of the project." },
      { q: "What flooring is best for Houston humidity?", a: "LVP is highly recommended for Houston's humidity. We'll walk you through all options based on your specific space." },
    ],
  },
  "epoxy-coatings": {
    h1: "Epoxy & Specialty Floor Coatings in Houston, TX",
    subtitle: "High-durability epoxy floors for garages, warehouses, showrooms, and more.",
    image: IMAGES.epoxy,
    about: "Epoxy floor coatings transform dull concrete into a durable, high-gloss surface that's easy to clean and built to withstand heavy use. Perfect for garages, workshops, warehouses, and commercial showrooms in Houston.",
    includes: [
      "Garage floor epoxy coatings",
      "Metallic and decorative flake systems",
      "Warehouse and industrial floor coatings",
      "Concrete prep and etching",
      "Crack and joint repair",
      "Anti-slip topcoat options",
      "Polyaspartic and polyurea coatings",
    ],
    faq: [
      { q: "How long does epoxy flooring last?", a: "Professionally installed epoxy can last 10–20 years with proper care and light maintenance." },
      { q: "How long does it take to cure?", a: "Foot traffic is typically safe after 24 hours. Full cure and vehicle traffic in 72 hours." },
      { q: "Can epoxy be applied over cracked concrete?", a: "Yes — we repair cracks and prep the surface properly before applying the coating system." },
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const detail = SERVICE_DETAILS[slug];
  const service = SERVICES.find((s) => s.slug === slug);

  if (!detail || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold text-foreground">Service not found.</p>
          <Link to="/services" className="mt-4 text-accent underline">View all services</Link>
        </div>
      </div>
    );
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero title={detail.h1} subtitle={detail.subtitle} image={detail.image} />

      {/* Main content + form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <SectionLabel>About This Service</SectionLabel>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
                  {service.title} in Houston
                </h2>
                <p className="text-muted-foreground leading-relaxed">{detail.about}</p>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-5">What's Included</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {detail.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-5">Common Questions</h3>
                <div className="space-y-5">
                  {detail.faq.map((item) => (
                    <div key={item.q} className="border-l-2 border-accent pl-4">
                      <p className="font-semibold text-foreground text-sm mb-1">{item.q}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related */}
              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-5">Other Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="group block border border-border rounded-lg overflow-hidden hover:border-accent/40 hover:shadow-md transition-all duration-200"
                    >
                      <img src={s.image} alt={s.title} className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="p-3">
                        <p className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors duration-150">{s.title}</p>
                        <div className="flex items-center gap-1 text-xs text-accent mt-1">Learn More <ArrowRight className="w-3 h-3" /></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    Get a Free Estimate
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    Tell us about your project and we'll get back to you within 24 hours.
                  </p>
                  <ContactForm compact />
                </div>
                <a
                  href={PHONE_HREF}
                  className="mt-4 flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold py-3.5 rounded w-full transition-colors duration-150"
                >
                  <Phone className="w-4 h-4" />
                  Call {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeCTAStrip />
    </>
  );
}