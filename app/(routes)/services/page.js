import Services from "@/app/_components/Services";
import React from "react";
import servicesData from "@/constants/servicesData";
import ServiceCard from "@/app/_components/ServiceCard";
function page() {
  return (
    <div className="pt-[85px] mb-[85px] pb-12 px-6 md:px-16 lg:px-28  bg-[var(--primary-blue)]">
      <div className=" w-full  pt-4 lg:pt-16 flex flex-col lg:justify-center text-start lg:text-center lg:items-center items-start space-y-6 ">
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
       
      </div>
      <div className="pt-10 w-full grid-cols-1 grid md:grid-cols-2 gird lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-4 md:gap-8 lg:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </div>
  );
}

export default page;
