import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import BeforeAfter from "@/components/home/BeforeAfter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import ServiceAreaSection from "@/components/home/ServiceAreaSection";
import Testimonials from "@/components/home/Testimonials";
import HomeCTAStrip from "@/components/home/HomeCTAStrip";
import NetworkSection from "@/components/home/NetworkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <BeforeAfter />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <ServiceAreaSection />
      <NetworkSection />
      <HomeCTAStrip />
    </>
  );
}