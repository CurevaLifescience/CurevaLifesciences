"use client";
import {
  Mail,
  Phone,
  User,
  MessageCircle,
  TimerIcon,
  LocateIcon,
} from "lucide-react";

import ContactUsForm from "./ContactUsForm";
import {
  FaAddressBook,
  FaAddressCard,
  FaAmbulance,
  FaStethoscope,
  FaSyringe,
  FaUserMd,
} from "react-icons/fa";
import { MdAddReaction, MdEmail } from "react-icons/md";

export default function ContactUs() {
  return (
    <section className=" bg-white pb-8 md:pb-0 " id="about">
      <div className=" px-6  md:px-16 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  md:gap-12 lg:gap-12 items-center">
          {/* Updated Image Grid + Experience Card */}
          <div className="w-full   ">
            <ContactUsForm />
          </div>

          {/* Text Content */}
          <div className=" col-span-1 mt-8 md:mt-3">
            <div className="inline-block  w-fit bg-dash-pattern-org px-4 py-1 text-2xl font-semibold text-[var(--primary-orange)]  rounded-md">
              Get in Touch
            </div>

            <p className="mt-4 text-base sm:text-lg text-gray-600">
              We invite driven individuals, visionary collaborators, and
              forward-thinking organizations to join us in shaping the future of
              healthcare.
            </p>
            <h2 className="mt-4 text-3xl md:text-3xl lg:text-3xl font-bold text-[var(--third-blue)] leading-tight">
              Connect with us
            </h2>

            <div className="mt-2 text-base sm:text-lg  text-gray-600">
              <div className="flex flex-row gap-2 items-center">
                <TimerIcon className="h-4 w-4" /> Mon - Fri, 10:00AM-06:00PM
              </div>
              <div className="flex flex-row gap-2 items-center">
                <MdEmail className="h-4 w-4 mt-1" />{" "}
                curevalifesciences@gmail.com
              </div>
            </div>
            <h2 className="mt-4 text-3xl md:text-3xl lg:text-3xl font-bold text-[var(--third-blue)] leading-tight">
              Find us at the office
            </h2>
            <div className="mt-2 flex flex-row   gap-2  text-base sm:text-lg text-gray-600">
              <FaAddressCard className="h-4 w-4 mt-[5px] " />
              <div className="flex flex-row w-full  gap-2 items-center">
 
                H. no. 250 Pancham Colony, Gaurela Road Pendra, Pendra,
                Bilaspur(cgh), Pendra Road, Chattisgarh, India, 495119
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
}
