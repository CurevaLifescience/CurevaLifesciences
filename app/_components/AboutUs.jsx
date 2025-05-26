'use client'
import Image from "next/image";
import {
  FaAmbulance,
  FaUserMd,
  FaStethoscope,
  FaSyringe,
} from "react-icons/fa";
import ButterflyImage from "./ButterflyImage";
import Link from "next/link";
import { useRouter } from "next/navigation";
const AboutUs = () => {
  const router = useRouter();
  return (
    <section className=" bg-white pb-8 md:pb-0 " id="about">
      <div className=" px-6  md:px-16 lg:px-28">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-12 items-center">
          {/* Updated Image Grid + Experience Card */}
          <div className="w-full lg:w-1/2 relative md:h-[650px]  ">
            <ButterflyImage />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2  mt-8 md:mt-0">
            <div className="inline-block bg-dash-pattern-org px-4 py-1 text-2xl font-semibold text-[var(--primary-orange)]  rounded-md">
              About Us
            </div>
            <h2 className="mt-4 text-3xl md:text-3xl lg:text-3xl font-bold text-[var(--third-blue)] leading-tight">
              Empowering Health & Wellness
              <br />
              With{" "}
              <strong className="text-[var(--sec-blue)]">
                Cureva Lifesciences
              </strong>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-600">
              At{" "}
              <strong className="text-[var(--primary-orange)] font-semibold">
                Cureva Lifesciences
              </strong>
              , we are dedicated to improving lives through next-generation
              healthcare solutions. Our innovative wellness products and medical
              advancements are designed to promote a healthier tomorrow. With a
              strong commitment to{" "}
              <span className="text-[#4d53c4] font-medium">
                research, care, and technology
              </span>
              , we aim to be your trusted partner in lifelong wellness.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:gap-6 gap-5">
              <div className="flex items-center bg-white border-[#4d53c4] border rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all ease-in-out ">
                <div className="p-4 bg-blue-100 rounded-r-4xl rounded-l-xl">
                  <FaAmbulance className="w-6 h-6 text-[#4d53c4]" />
                </div>
                <span className="ml-4 text-[var(--third-blue)] font-medium">
                  Timely Care Delivery
                </span>
              </div>
              <div className="flex items-center bg-white border-[var(--primary-orange)] border rounded-lg shadow-sm hover:shadow-md  hover:scale-105 transition-all ease-in-out ">
                <div className="p-4 bg-orange-100  rounded-r-4xl rounded-l-xl">
                  <FaUserMd className="w-6 h-6 text-[var(--primary-orange)]" />
                </div>
                <span className="ml-4 text-[var(--primary-orange)] font-medium">
                  Expert Team
                </span>
              </div>
              <div className="flex items-center bg-white border border-red-500 rounded-lg shadow-sm hover:shadow-md  hover:scale-105 transition-all ease-in-out ">
                <div className="p-4 bg-red-100  rounded-r-4xl rounded-l-xl">
                  <FaStethoscope className="w-6 h-6 text-red-500" />
                </div>
                <span className="ml-4 text-red-500 font-medium">
                  Advanced Research
                </span>
              </div>
              <div className="flex items-center bg-white border border-purple-500 rounded-lg shadow-sm hover:shadow-md  hover:scale-105 transition-all ease-in-out ">
                <div className="p-4 bg-purple-100  rounded-r-4xl rounded-l-xl">
                  <FaSyringe className="w-6 h-6 text-purple-500" />
                </div>
                <span className="ml-4 text-purple-500 font-medium">
                  Innovative Solutions
                </span>
              </div>
            </div>

            <button
              className="md:mt-6 mt-5 px-8 py-3 bg-[var(--primary-orange)] text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-orange)] focus:ring-opacity-50"
              id="bottone1"
              onClick={() => router.push("/about")}

            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
