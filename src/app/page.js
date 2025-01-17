'use client';

import AboutUs from "../module/aboutUs/page";
import ExploreServices from "../module/services/page";
import WhyUs from "../module/whyUs/page";
import Subscription from "../module/subscription/page";
import ClientCarousel from "../module/client/page";
import FAQSection from "../module/faq/page";
import HomeSection from "../module/home/page";

export default function Home() {
  return (

    <div>
      {/* Main Content */}
      <div id="home">
        <HomeSection />
      </div>

      <div id="about">
        <AboutUs />
        <WhyUs />
      </div>

      <div id="services">
        <ExploreServices />
      </div>

      <div id="testimonials">
        <ClientCarousel />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <div id="contact">
        <Subscription />
      </div>

    </div>
  );
}