"use client";

import navigation from "@/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/animate-education-logo.png";
import { HiArrowCircleUp } from "react-icons/hi";
import { useEffect, useState } from "react";

const THRESHOLD = 800;
export default function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScrollToTopVisibility = () => {
      if (window.scrollY > THRESHOLD) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScrollToTopVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollToTopVisibility);
    };
  }, []);

  return (
    <>
      <footer className=" mt-32">
        <div className="px-4 md:px-10 flex flex-col md:flex-row text-left justify-between  !z-[999] items-start md:items-center py-4  app-layout bg-white pb-10 border-b border-secondary gap-4">
          <div className="py-2 space-y-3">
            <Link href="/">
              <Image
                src={logo}
                height={80}
                width={80}
                alt="animate education logo"
              />
            </Link>
            <p className="max-w-sm text-sm">
              Animate Education, are experts in producing high quality
              educational 2D and 3D videos that a child can relate to. By
              teaching through fun and interactive videos and games, which
              support class based learning, each child can develop at the
              appropriate rate and in a manner that is unique to them.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-12 p-5 border rounded-lg shadow-md">
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
          {showScrollToTop && (
            <Link
              href="/"
              className="bg-primary hover:shadow-none focus-within:shadow-none bottom-8 right-8 fixed self-end px-2 py-2 text-white rounded-full shadow-lg"
            >
              <HiArrowCircleUp className="w-8 h-8" />
            </Link>
          )}
        </div>
        <p className="text-secondary py-4 mt-4 text-center">
          © 1999 - {new Date().getFullYear()} Animate Education. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
