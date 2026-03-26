import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_HREF, PHONE } from "@/lib/constants";

export function EstimateButton({ className = "", size = "default" }) {
  const base = size === "lg"
    ? "px-7 py-3.5 text-base"
    : "px-5 py-2.5 text-sm";
  return (
    <Link
      to="/contact"
      className={`inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded transition-colors duration-150 ${base} ${className}`}
    >
      Get Free Estimate
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

export function CallButton({ className = "", size = "default" }) {
  const base = size === "lg"
    ? "px-7 py-3.5 text-base"
    : "px-5 py-2.5 text-sm";
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded transition-colors duration-150 ${base} ${className}`}
    >
      <Phone className="w-4 h-4" />
      {PHONE}
    </a>
  );
}

export function CallButtonDark({ className = "", size = "default" }) {
  const base = size === "lg"
    ? "px-7 py-3.5 text-base"
    : "px-5 py-2.5 text-sm";
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center gap-2 border border-border hover:border-accent text-foreground hover:text-accent font-semibold rounded transition-colors duration-150 ${base} ${className}`}
    >
      <Phone className="w-4 h-4" />
      {PHONE}
    </a>
  );
}