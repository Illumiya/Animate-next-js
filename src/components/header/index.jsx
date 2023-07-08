"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { HiBars3 } from "react-icons/hi2";

import logo from "@/assets/images/animate-education-logo.png";
import NavContext from "@/context/nav-context";
import navigation from "@/navigation";
import MobileHeader from "../mobile-header";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen]);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <NavContext.Provider
      value={{
        isNavOpen,
        toggleNav,
      }}
    >
      <nav className="px-4 md:px-10 flex justify-between !z-[999] items-center py-4  app-layout bg-white sticky top-0 ">
        <div className="py-2">
          <Link href="/">
            <Image
              src={logo}
              height={80}
              width={80}
              alt="animate education logo"
            />
          </Link>
        </div>
        <div className="md:flex hidden gap-10">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="text-neutral-700 hover:text-primary font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link
          href="/#contact-us"
          className="bg-primary md:block hover:shadow-none focus-within:shadow-none hidden px-6 py-2 text-white rounded-full shadow-lg"
        >
          Contact Us
        </Link>
        <button onClick={toggleNav} className="md:hidden">
          <HiBars3 size={48} />
        </button>
        <div
          className={`fixed right-0 top-0 flex justify-end z-[99999] overflow-hidden transition-all duration-500 ease-in-out ${
            isNavOpen ? "w-screen" : "w-[0px]"
          }`}
        >
          <MobileHeader />
        </div>
      </nav>
    </NavContext.Provider>
  );
}
