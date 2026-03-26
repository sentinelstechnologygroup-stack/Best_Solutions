import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Home", path: "/" },
  {
    label: "Services", path: "/services",
    children: [
      { label: "Interior Painting", path: "/services/interior-painting" },
      { label: "Exterior Painting", path: "/services/exterior-painting" },
      { label: "Residential Painting", path: "/services/residential-painting" },
      { label: "Commercial Painting", path: "/services/commercial-painting" },
      { label: "Flooring Installation", path: "/services/flooring-installation" },
      { label: "Epoxy & Specialty Coatings", path: "/services/epoxy-coatings" },
    ],
  },
  { label: "Solutions", path: "/solutions" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      {/* Sticky bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-primary shadow-lg" : "bg-primary/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">BSD</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-display font-bold text-white text-sm leading-tight">Best Solution</p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest leading-tight">Distribution</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-medium transition-colors duration-150 cursor-pointer ${
                        isActive(item.path) ? "text-accent" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-1 w-64 z-50"
                        >
                          <div className="bg-white rounded-lg shadow-xl border border-border overflow-hidden">
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-accent transition-colors duration-150"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded text-sm font-medium transition-colors duration-150 ${
                      isActive(item.path) ? "text-accent" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right CTA */}
            <div className="flex items-center gap-2">
              <a
                href={PHONE_HREF}
                className="hidden sm:flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded text-sm font-semibold transition-colors duration-150"
              >
                <Phone className="w-3.5 h-3.5" />
                {PHONE}
              </a>
              <Link
                to="/contact"
                className="hidden lg:block border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded text-sm font-medium transition-colors duration-150"
              >
                Get Free Estimate
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden bg-primary border-t border-white/10"
            >
              <div className="px-4 py-3 space-y-1">
                {NAV.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-white/80 cursor-pointer"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {mobileServicesOpen && (
                        <div className="ml-4 border-l border-white/10 pl-3 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-3 py-2 text-sm text-white/60 hover:text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-3 py-2.5 text-sm font-medium text-white/80 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <div className="pt-2 pb-1 space-y-2">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded text-sm font-semibold w-full"
                  >
                    Get Free Estimate
                  </Link>
                  <a
                    href={PHONE_HREF}
                    className="flex items-center justify-center gap-2 border border-white/30 text-white px-4 py-3 rounded text-sm font-semibold w-full"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now: {PHONE}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}