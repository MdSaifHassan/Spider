'use client';

import AboutUs from "./aboutUs/page";
import ExploreServices from "./services/page";
import WhyUs from "./whyUs/page";
import HomePage from "./Home/page";
import Header from "@/components/Header/Header";
import Footer from "./footer/page";
import Subscription from "./subscription/page";
import ClientCarousel from "./client/page";
import FAQSection from "./faq/page";
import Container from "@/components/Container/Container";

export default function Home() {
  return (
    
    <div>
      <Container>
      <Header/>
      {/* Main Content */}
        <div id="home">
          <HomePage />
        </div>

        <div id="about">
          <AboutUs />
          <WhyUs/>
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

      </Container>
      {/* Footer */}
      <Footer />
    </div>
  );
}