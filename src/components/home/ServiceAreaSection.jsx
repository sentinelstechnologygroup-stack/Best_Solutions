import React from "react";
import { MapPin } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { EstimateButton } from "@/components/shared/CTAButton";

const cities = [
  "Houston", "Sugar Land", "Katy", "Pearland",
  "The Woodlands", "Pasadena", "Baytown", "League City",
  "Missouri City", "Friendswood", "Humble", "Conroe",
];

export default function ServiceAreaSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>Service Area</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Serving Houston &amp; Surrounding Cities
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We provide professional painting and flooring services throughout the Greater Houston area. Wherever you are in the metro — we come to you.
            </p>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {cities.map((city) => (
                <div key={city} className="flex items-center gap-2 text-sm text-foreground/80">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  {city}, TX
                </div>
              ))}
            </div>

            <div className="mt-8">
              <EstimateButton />
            </div>
          </div>

          {/* Map visual placeholder */}
          <div className="relative rounded-lg overflow-hidden bg-primary/5 border border-border h-[380px] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-accent" />
              </div>
              <p className="font-display font-bold text-xl text-foreground mb-1">Greater Houston Area</p>
              <p className="text-muted-foreground text-sm">We serve 50+ mile radius from Houston, TX</p>
              <div className="mt-4 inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Currently Accepting New Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}