'use client';

import AboutUs from "../module/aboutUs";
import ExploreServices from "../module/services";
import Subscription from "../module/subscription";
import ClientCarousel from "../module/client";
import FAQSection from "../module/faq";
import HomeSection from "../module/Home";
import WhyUs from "@/src/module/whyUs";

export default function Home() {
  return (
    <div>
        <HomeSection />
        <AboutUs />
        <WhyUs />
        <ExploreServices />
        <ClientCarousel />
        <FAQSection />  
        <Subscription />
    </div>
  );
}