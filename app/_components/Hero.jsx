"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import "./style.css"; // keep your existing custom styles
import { useRouter } from "next/navigation";
export default function HeroSection() {
  const [offset, setOffset] = useState(0);
const router = useRouter()
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev === 0 ? 5 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-[85px]  bg-[var(--primary-blue)] h-full px-6 md:px-16 lg:px-28 overflow-hidden pb-[100px] md:pb-[200px]">
      {/* Decorative Background Pattern */}
      {/* <div className="bg-curved-pattern"></div> */}

      {/* Main Content */}
      <div className="relative z-10 pt-16   md:pt-24 gap-10 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="space-y-6 max-w-xl">
          <div className="inline-block bg-dash-pattern px-4 py-1 text-lg font-semibold text-[var(--sec-blue)] rounded-md">
            Next-Generation Healthcare & Wellness
          </div>
          <h1 className="text-4xl font-extrabold text-[var(--third-blue)] leading-tight">
            Caring for Life with <br />
            <span className="text-[var(--primary-orange)]">Compassion</span> &{" "}
            <span className="text-[var(--sec-blue)]">Innovation</span>
          </h1>
          <p className="text-gray-600 text-xl  font-sans">
            At{" "}
            <strong className="font-bold text-[var(--third-blue)]">Cureva Lifesciences</strong>,
            we deliver next-generation healthcare solutions and personalized
            wellness programs designed to elevate your well-being. Discover the
            future of care with India&apos;s top specialists.
          </p>
          {/* <p className="text-gray-600 text-xl  font-sans">
            At{" "}
            <strong className="font-bold text-[var(--third-blue)]">Cureva Lifesciences</strong>,
            we deliver next-generation healthcare solutions and personalized
            wellness programs designed to elevate your well-being. Discover the
            future of care with India&apos;s top specialists.
          </p> */}
          <button id="bottone1"
          
          onClick={() => router.push("#about")}
>
            <strong>Discover features</strong>
          </button>
        </div>

        {/* Doctor Image */}
        <div className="relative flex justify-center md:mt-0">
          <div
            className="transition-all duration-1000 w-full flex justify-center"
            style={{ transform: `translateY(-${offset}px)` }}
          >
            <Image
              src={"/hero.jpg"} // replace with your actual image path
              alt="Cureva Doctors"
              className="rounded-xl shadow-xl"
              width={700}
              height={500}
              priority
            />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      {/* <div className="floating absolute top-10 left-10 w-6 h-6 bg-[var(--primary-orange)] rotate-45 opacity-60 "></div> */}
      {/* <div className="floating delay-2000 absolute top-40 right-20 w-4 h-4 rounded-full bg-[var(--sec-blue)] opacity-80 "></div>
      <div className="floating delay-1000 absolute bottom-32 left-1/3 w-10 h-10 border-2 border-[var(--primary-orange)] rotate-12 "></div>
      <div className="floating delay  -3000 absolute bottom-20 right-10 w-6 h-6 bg-[var(--primary-orange)] rounded-sm opacity-70 "></div>
      <div className="floating floating-3d rounded-full delay-1500 absolute top-20 right-1/4 w-8 h-8 opacity-90"></div>

      <div
        className="floating floating-3d delay-2500 absolute bottom-10 left-20 w-5 h-5 rounded-sm opacity-90 "
        style={{ background: "linear-gradient(145deg, var(--sec-blue), #2a2e85)" }}
      ></div>

      <div className="floating floating-3d border delay-3500 absolute top-1/4 left-1/5 w-7 h-7 border-2 rounded-md opacity-90 "></div> */}

      {/* Curved Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg
          className="relative block w-[calc(100%+1.3px)]  h-[100px] md:h-[200px]  rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C300,100 600,0 900,50 C1050,75 1200,50 1200,50 L1200,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
