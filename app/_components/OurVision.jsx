// components/OurVision.jsx

import React from "react";
import { ArrowRight } from "lucide-react";
import visionPoints from "@/constants/visionData";

export default function OurVision() {
  const firstColumn = visionPoints.slice(0, 3);
  const secondColumn = visionPoints.slice(3);

  return (
    <section className="w-full py-4 md:py-16 px-6 md:px-16 lg:px-28 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
        {/* Left Section */}
        <div className="w-full col-span-1 mt-8 md:mt-0">
          <div className="inline-block bg-dash-pattern-org px-4 py-1 text-2xl font-semibold text-[var(--primary-orange)]  rounded-md">
            Our Vision
          </div>
          <h2 className="mt-4 text-3xl md:text-3xl lg:text-3xl font-bold text-[var(--third-blue)] leading-tight">
            Empowering a Healthier Tomorrow with{" "}
            <strong className="text-[var(--sec-blue)]">
              Cureva Lifesciences
            </strong>
          </h2>
          <p className="mt-4 text-md text-gray-600">
            At Cureva Lifesciences, our vision is to transform the future of
            healthcare by combining cutting-edge science, compassionate care,
            and technological innovation. We aim to build a healthier world
            where wellness is a way of life, not a privilege.
          </p>
        </div>

        {/* Right Section - 2 columns of vision cards */}
        <div className="md:col-span-2 grid  grid-cols-1 lg:grid-cols-2 gap-4">
          {[firstColumn, secondColumn].map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {column.map((point, index) => (
                <div
                  key={index}
                  className={`rounded-lg shadow-lg hover:shadow-2xl p-4 border  transition-all ${point.border}`}
                >
                  <h4
                    className={`uppercase text-xs font-semibold mb-1 ${point.color}`}
                  >
                    {point.title}
                  </h4>
                  <p className="text-gray-700 font-medium">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
