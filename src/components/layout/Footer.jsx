import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/constants";

const serviceLinks = [
  { label: "Interior Painting", path: "/services/interior-painting" },
  { label: "Exterior Painting", path: "/services/exterior-painting" },
  { label: "Residential Painting", path: "/services/residential-painting" },
  { label: "Commercial Painting", path: "/services/commercial-painting" },
  { label: "Flooring Installation", path: "/services/flooring-installation" },
  { label: "Epoxy & Specialty Coatings", path: "/services/epoxy-coatings" },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Solutions", path: "/solutions" },
  //{ label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {/* Brand */}
    <div>
      <div className="flex items-center mb-4">
        <img
            src="/images/logo.png"
            alt="Best Solution Distribution Logo"
            className="h-40 md:h-44 w-auto object-contain drop-shadow-lg"
        />
      </div>

      <p className="text-white/50 text-sm leading-relaxed mb-5">
        Professional painting and flooring services serving Houston, TX and surrounding areas. Licensed, insured, and committed to quality.
      </p>

      <div className="space-y-2.5">
        <a
          href={PHONE_HREF}
          className="flex items-center gap-2.5 text-sm text-white/70 hover:text-accent transition-colors duration-150"
        >
          <Phone className="w-4 h-4 text-accent shrink-0" />
          {PHONE}
        </a>

        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-2.5 text-sm text-white/70 hover:text-accent transition-colors duration-150"
        >
          <Mail className="w-4 h-4 text-accent shrink-0" />
          {EMAIL}
        </a>

        <div className="flex items-center gap-2.5 text-sm text-white/70">
          <MapPin className="w-4 h-4 text-accent shrink-0" />
          Houston, TX & Surrounding Areas
        </div>
      </div>
    </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Our Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="flex items-center gap-1.5 text-sm text-white/60 hover:text-accent transition-colors duration-150"
                >
                  <ArrowRight className="w-3 h-3" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="flex items-center gap-1.5 text-sm text-white/60 hover:text-accent transition-colors duration-150"
                >
                  <ArrowRight className="w-3 h-3" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Area */}
        <div>
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Service Area</h4>
          <ul className="space-y-1.5 text-sm text-white/60">
            {["Houston, TX", "Sugar Land, TX", "Katy, TX", "Pearland, TX", "The Woodlands, TX", "Pasadena, TX", "Baytown, TX", "League City, TX"].map(city => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Best Solution Distribution. All rights reserved.</p>
          <p>Licensed & Insured · Houston, TX</p>
        </div>
      </div>
    </footer>
  );
}