"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1];
  // console.log(currentPath);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Vision", href: "/vision" },
    { name: "Our Services ", href: "/services", highlight: "orange" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed h-[85px] z-50  md:px-16 lg:px-28 px-6 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[var(--primary-blue)] shadow-none"
      }`}
    >
      <div className="h-full flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="CUREVA Lifesciences"
            width={140}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex md:gap-4 lg:gap-8 items-center text-md font-medium text-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative group hover:text-[var(--primary-orange)] transition
                ${link.href === "/"+currentPath ? "text-[var(--primary-orange)]" :""}
                `}
            >
              {link.name}
              <span className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--primary-orange)] group-hover:w-full transition-all duration-300
                ${link.href === "/"+currentPath ? "bg-[var(--primary-orange)] w-full" :""}`}></span>
            </Link>
          ))}
        </nav>

        {/* Right: Contact Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="flex cursor-pointer flex-row hover:gap-4 text-lg   transition-all ease-in-out bg-[var(--third-blue)] px-6 py-6 hover:bg-[var(--sec-blue)]">
              Contact Us
              <span className="">
                <FaArrowRightLong />
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl text-[var(--primary-orange)]"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 px-4 py-4 space-y-2 bg-white border-[1px] border-[var(--primary-orange)] shadow-md rounded-lg mx-2">
          {[
            ...navLinks,
            { name: "Contact", href: "/contact", highlight: "blue" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 text-lg rounded transition  hover:bg-gray-100
              ${link.href === "/"+currentPath ? "text-[var(--primary-orange)]" :""}
              `}
            >
              {link.name}
              
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
