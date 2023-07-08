import HeroSection from "./features/home/HeroSection";
import AboutUs from "./features/home/AboutUs";
import OurProducts from "./features/home/OurProducts";
import OurTeam from "./features/home/OurTeam";
import ContactUs from "./features/home/ContactUs";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT US */}
      <AboutUs />

      {/* OUR PRODUCTS*/}
      <OurProducts />

      {/* OUR TEAM */}
      <OurTeam />

      {/* CONTACT US */}
      <ContactUs />
    </>
  );
}
