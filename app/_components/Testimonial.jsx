"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import ButterflyImage from "./ButterflyImage";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import testimonials from "@/constants/testimonialsData";

export default function TestimonialSection() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}
