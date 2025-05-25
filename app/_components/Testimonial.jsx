"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import ButterflyImage from "./ButterflyImage";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
const testimonials = [
  {
    id: 1,
    name: "John Deo",
    designation: "PATIENT",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ssuspendisse ultrices gravida.",
    src: "/user.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    designation: "PATIENT",
    quote:
      "Exceptional care and professional service. The medical team was incredibly knowledgeable and made me feel comfortable throughout my treatment. Highly recommend their services to anyone seeking quality healthcare.",
    src: "/user.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    designation: "PATIENT",
    quote:
      "Outstanding experience from start to finish. The staff was friendly, the facilities were clean and modern, and the treatment I received exceeded my expectations. Thank you for the excellent care.",
    src: "/user.jpg",
  },
];

export default function TestimonialSection() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}
