"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
function HowWeWork() {
  const router = useRouter();
  return (
    <div className="py-8 md:py-12  px-6    md:px-16  lg:px-28">
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="md:text-center text-start">
          <div className="inline-block bg-dash-pattern-org px-4 py-1 text-2xl font-semibold text-[#f26522]  rounded-md">
            Working Process
          </div>
          <h2 className="mt-6 md:text-4xl font-bold md:font-extrabold text-[var(--third-blue)] tracking-tight text-4xl lg:text-5xl">
            How we work?
          </h2>
        </div>

        {/* Cards Section */}
        <div className="lg:mt-18 mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 - Down */}
          <div
            className="relative group rounded-3xl bg-[var(--primary-blue)] 
          border-2 border-purple-200
          group-hover:border-2 hover:border-orange-500
          p-8 shadow-2xl overflow-hidden"
          >
            {/* Orange overlay that appears from bottom and disappears to top */}
            <div className="absolute inset-0 z-0 bg-orange-500 origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out pointer-events-none"></div>

            {/* Content on top */}
            <div className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-white">
              <div className="relative h-24 text-8xl font-extrabold text-[var(--sec-blue)] group-hover:text-white transition-colors duration-500">
                <span className="absolute left-0 top-0 opacity-30">01</span>
                <span className="absolute left-1 top-1 opacity-30">01</span>
                <span className="absolute left-0.5 top-0.5 text-white">01</span>
                <span className="relative">01</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--third-blue)] group-hover:text-white transition-colors duration-500">
                Innovate with Purpose
              </h3>
              <p className="mt-2 text-base text-gray-600 group-hover:text-orange-100 transition-colors duration-500">
                We identify pressing healthcare challenges and develop smart,
                research-backed solutions tailored to modern lifestyles.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="mt-8 flex items-center justify-between rounded-lg p-2 font-sans group-hover:text-[#f26522] transition-all ease-in-out bg-white text-base font-medium text-[#20227b] hover:bg-gray-50 group-hover:bg-white transition-colors duration-500"
              >
                <span className="px-5">View More</span>
                <span className="text-white p-2 rounded-md group-hover:bg-[#f26522] transition-all ease-in-out bg-[#20227b] text-xl">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>

          {/* Card 2 - Up */}
          <div className="relative rounded-3xl border-2 border-orange-500 bg-orange-500 p-8 shadow-2xl lg:-translate-y-10">
            <div className="relative h-24 text-8xl font-extrabold text-white">
              <span className="absolute left-0 top-0 opacity-50">02</span>
              <span className="absolute left-1 top-1 opacity-50">02</span>
              <span className="absolute left-0.5 top-0.5 text-orange-500">
                02
              </span>
              <span className="relative text-white">02</span>
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">
              Build with Integrity
            </h3>
            <p className="mt-2 text-base text-orange-100">
              From concept to creation, every product goes through rigorous
              testing, ethical formulation, and scientific validation.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="mt-8 flex items-center justify-between rounded-lg p-2 font-sans bg-white   text-base font-medium text-orange-500 hover:bg-gray-50"
            >
              <span className="px-5">View More</span>
              <span className="text-white p-2 rounded-md bg-[#f26522] text-xl">
                <MdKeyboardArrowRight />
              </span>
            </button>
          </div>

          {/* Card 3 - Down */}
          <div
            className="relative group rounded-3xl border-2 border-purple-200
          group-hover:border-2 hover:border-orange-500 bg-[var(--primary-blue)] p-8 shadow-2xl overflow-hidden"
          >
            {/* Orange overlay that appears from bottom and disappears to top */}
            <div className="absolute inset-0 z-0 bg-orange-500 origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out pointer-events-none"></div>

            {/* Content on top */}
            <div className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-white">
              <div className="relative h-24 text-8xl font-extrabold text-[var(--sec-blue)] group-hover:text-white transition-colors duration-500">
                <span className="absolute left-0 top-0 opacity-30">03</span>
                <span className="absolute left-1 top-1 opacity-30">03</span>
                <span className="absolute left-0.5 top-0.5 text-white">03</span>
                <span className="relative">03</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--third-blue)] group-hover:text-white transition-colors duration-500">
                Deliver with Care
              </h3>
              <p className="mt-2 text-base text-gray-600 group-hover:text-orange-50 transition-colors duration-500">
                Our reach extends through digital platforms, pharmacy networks,
                and corporate wellness channels—ensuring ongoing support and
                trusted accessibility.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="mt-8 flex items-center bg-white justify-between rounded-lg p-2 font-sans group-hover:text-[#f26522] transition-all ease-in-out bg-[#f4f7fe] text-base font-medium text-[#20227b] hover:bg-gray-50 group-hover:bg-white transition-colors duration-500"
              >
                <span className="px-5">View More</span>
                <span className="text-white p-2 rounded-md group-hover:bg-[#f26522] transition-all ease-in-out bg-[#20227b] text-xl">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
