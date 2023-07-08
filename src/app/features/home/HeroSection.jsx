import InfoCard from "@/components/hero-section/InfoCard";
import heroSectionCardData from "@/data/hero-card.data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/hero-image.svg";

const HeroSection = () => {
  return (
    <>
      <section
        className=" app-layout md:flex-row md:py-12 flex flex-col items-center justify-between w-full gap-8 py-6"
        id="home"
      >
        <div className="flex flex-col gap-4">
          <div className="md:text-5xl text-3xl font-bold [&>h1]:leading-snug">
            <h1 className="">
              We make learning
              <span className="border-primary border-b-[7px] leading-[120%] font-bold mx-2 inline whitespace-nowrap">
                so fun
              </span>
            </h1>
            <h1>
              and
              <span className="border-primary border-b-[7px] leading-[120%] font-bold mx-2 ">
                interesting
              </span>
              that
            </h1>
            <h1>students want to study</h1>
            <h1>
              more and more
              <span className="text-primary text-7xl leading-3">...</span>
            </h1>
          </div>

          <p className="text-secondary text-base max-w-[50ch]">
            Games allow to learn through small victories that will boost
            confidence and eliminate fear and anxiety before a test
          </p>
          <Link
            href="/#our-products"
            className="bg-primary w-fit shrink-0 md:mt-12 px-6 py-2 mt-4 text-sm font-bold text-white uppercase rounded-full"
          >
            Our Products
          </Link>
        </div>

        <div className="">
          <Image src={logo} alt="hero-image" width={600} />
        </div>
      </section>
      {/* HERO SECTION CARDS */}
      <section className="app-layout md:flex-row md:py-12 flex flex-col items-center justify-between w-full gap-16 py-6 my-12">
        {heroSectionCardData.map((infoData, index) => (
          <InfoCard {...infoData} key={index} index={index} />
        ))}
      </section>
    </>
  );
};

export default HeroSection;
