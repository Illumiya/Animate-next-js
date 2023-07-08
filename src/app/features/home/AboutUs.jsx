import aboutUsSVG from "@/assets/images/about-us/about-us.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      className="app-layout md:flex-row md:py-12 md:gap-32 flex flex-col items-center justify-between w-full gap-8 py-6 my-12"
      id="about-us"
    >
      <div className="shrink-0">
        <Image src={aboutUsSVG} alt="about-us" width={400} />
      </div>
      <div className="gap-7 flex flex-col">
        <h2 className="text-4xl font-bold">About us</h2>

        <p className="font-base min-w-1/2 text-left">
          We’re a UK based ed-tech company, a dynamic team with over 50 years of
          creating games and learning apps that students love. Based on
          extensive experience and a desire to help modern children learn a lot
          of information that is presented to them in the form of school
          subjects, we decided to create a new approach to learning it. We have
          developed a number of specialised games to help students better master
          the curriculum and disciplines. Our approach allows you to have fun
          and easily learn new, necessary information by playing games without
          spending a lot of time and effort.
          <br />
          <br />
          We work with love and passion for you.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
