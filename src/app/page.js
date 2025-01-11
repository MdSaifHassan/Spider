'use client';

import AboutUs from "./aboutUs/page";
import ExploreServices from "./services/page";
import WhyUs from "./whyUs/page";
import HomePage from "./home/page";
import Header from "@/components/Header/Header";
import Footer from "./footer/page";
import Subscription from "./subscription/page";
import ClientCarousel from "./client/page";
import FAQSection from "./faq/page";

export default function Home() {
  return (
    <>
      <Header/>
      <HomePage />
      <AboutUs />
      <WhyUs />
      <ExploreServices />
      <ClientCarousel/>
      <FAQSection/>
      <Subscription/>
      <Footer/>
    </>


  );
}
