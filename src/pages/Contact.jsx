import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionLabel from "@/components/shared/SectionLabel";
import ContactForm from "@/components/shared/ContactForm";
import { PHONE, PHONE_HREF, EMAIL, IMAGES } from "@/lib/constants";

const info = [
  { icon: Phone, label: "Phone", value: PHONE, href: PHONE_HREF },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: "Service Area", value: "Houston, TX & Surrounding Areas", href: null },
  { icon: Clock, label: "Hours", value: "Mon–Fri 7am–6pm · Sat 8am–2pm", href: null },
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="Request a Free Estimate"
        subtitle="Fill out the form below or call us directly. We respond within 24 hours."
        image={IMAGES.heroInterior}
        showCTAs={false}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: contact info */}
            <div className="lg:col-span-1">
              <SectionLabel>Contact Us</SectionLabel>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Whether you have a quick question or are ready to book — reach out by phone, email, or the form. We'll review your project and provide the best solution.
              </p>
              <div className="bg-secondary border border-border rounded-lg px-4 py-3 mb-6">
                <p className="text-xs text-foreground/70 leading-relaxed">
                  <span className="font-semibold text-foreground">Limited availability.</span> We schedule projects in advance — contact us today to secure your spot.
                </p>
              </div>

              <div className="space-y-5">
                {info.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a href={href} className="text-foreground hover:text-accent transition-colors duration-150 text-sm font-medium">{value}</a>
                      ) : (
                        <p className="text-foreground text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call CTA */}
              <a
                href={PHONE_HREF}
                className="mt-8 flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold py-3.5 rounded w-full transition-colors duration-150"
              >
                <Phone className="w-4 h-4" />
                Call Now: {PHONE}
              </a>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-display font-bold text-xl text-foreground mb-1">
                  Request Your Free Estimate
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  No commitment required — we'll review your project and provide the best solution.
                </p>
                <p className="text-sm bg-accent/10 text-accent font-medium px-3 py-2 rounded mb-5">
                  Not sure what your project requires? Select "Not Sure" and we'll help determine the best solution.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}