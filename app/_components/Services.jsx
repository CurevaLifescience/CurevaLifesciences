"use client";
import { useState } from "react";
import servicesData from "../../constants/servicesData";
import ServiceCard from "./ServiceCard";
import { useRouter } from "next/navigation";
const Services = () => {
  const [startIndex, setStartIndex] = useState(0);
  const servicesPerPage = servicesData.length;
const router = useRouter()
  const handleNext = () => {
    const nextIndex = startIndex + 1;
    if (nextIndex + servicesPerPage > servicesData.length) {
      setStartIndex(0); // loop to start
    } else {
      setStartIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - 1;
    if (prevIndex < 0) {
      setStartIndex(servicesData.length - servicesPerPage); // loop to end
    } else {
      setStartIndex(prevIndex);
    }
  };

  const visibleServices = servicesData.slice(
    startIndex,
    startIndex + servicesPerPage
  );

  return (
    <section className="flex flex-col lg:flex-row py-16 overflow-x-hidden pl-6 md:pl-16 lg:pl-28 w-full  bg-[var(--primary-blue)]">
      {/* Left Section */}
      <div className="lg:w-[40%] w-full pr-12 pt-4 lg:pt-20 flex flex-col lg:justify-start lg:items-start items-start space-y-6 ">
        <div className="inline-block w-fit bg-dash-pattern-org px-4 py-1 text-2xl font-semibold text-[var(--primary-orange)]  rounded-md">
          Our Services
        </div>
        <h2 className="text-4xl font-bold text-[var(--third-blue)]">
          Caring for Life with Innovation
        </h2>
        <h2 className="text-lg   text-gray-600">
          At{" "}
          <strong className="text-[var(--sec-blue)]">
            Cureva Lifesciences
          </strong>
          , we are dedicated to delivering modern, effective, and accessible
          healthcare and wellness solutions. Our services are designed to
          empower individuals and organizations to lead healthier lives through
          innovation, AI integration, and a compassionate approach.
        </h2>
        <button
          className="w-fit bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          id="bottone1"
          onClick={() => router.push("/services")}

        >
          All Services
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-[60%] w-full relative flex flex-col  mt-8 lg:mt-0 ">
        {/* Background layers */}
        <div className="absolute inset-0 flex lg:border-l-[2px] lg:border-[var(--sec-blue)] -ml-[2px] lg:pl-3    ">
          <div className="lg:w-[30%] " />
          <div className="lg:w-[70%] w-full bg-[var(--sec-blue)] rounded-tl-[40px] rounded-bl-[40px] " />
        </div>

        {/* Service Cards - row layout */}
        <div className="relative z-10 flex gap-x-6 p-12 lg:pt-20 lg:pb-20 w-full overflow-x-auto hide-scrollbar  ">
          {visibleServices.map((service, index) => (
            <ServiceCard service={service} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
