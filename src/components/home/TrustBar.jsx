import React from "react";
import { ShieldCheck, Clock, BadgeCheck, MapPin } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Licensed & Insured" },
  { icon: Clock, text: "Reliable Scheduling" },
  { icon: BadgeCheck, text: "Clean Workmanship" },
  { icon: MapPin, text: "Local Houston Business" },
];

export default function TrustBar() {
  return (
    <section className="bg-primary border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {items.map(({ icon: ItemIcon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2.5 py-4 px-4">
              <ItemIcon className="w-4 h-4 text-accent shrink-0" />
              <span className="text-white/80 text-sm font-medium whitespace-nowrap">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}