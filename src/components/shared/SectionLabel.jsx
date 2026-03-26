import React from "react";

export default function SectionLabel({ children }) {
  return (
    <p className="inline-flex items-center gap-2 text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">
      <span className="w-6 h-0.5 bg-accent" />
      {children}
    </p>
  );
}