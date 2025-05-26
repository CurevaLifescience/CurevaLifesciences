import Image from "next/image";
import Navbar from "./_components/Header";
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import HowWeWork from "./_components/HowWeWork";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonial";
import NewsSection from "./_components/LatestNews";
import ContactUs from "./_components/ContactUs";
import OurTeam from "./_components/OurTeam";
import OurVision from "./_components/OurVision";

export default function Home() {
  return (
    <div className="md:space-y-6 space-y-12 ">
      <Hero />
      <AboutUs />
      <HowWeWork />
      <Services />
      <OurVision/>
      {/* <Testimonial /> */}
      
      <ContactUs />
      <OurTeam />
      
      {/* <NewsSection /> */}
    </div>
  );
}
