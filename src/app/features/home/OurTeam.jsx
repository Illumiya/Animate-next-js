import ourTeamData from "@/data/our-team.data";
import Image from "next/image";
import { Fragment } from "react";

const OurTeam = () => {
  return (
    <section
      className="app-layout md:py-12 md:gap-32 w-full gap-8 py-6 my-12"
      id="our-team"
    >
      <h2 className=" mt-10 mb-5 text-5xl font-bold text-center">Our Team</h2>
      <p className="text-secondary text-center">
        Mad Scientists, Passionate Teachers, and Award-Winning Artists...
      </p>
      <p className="text-secondary text-center">
        With over 50 years of experience creating games and learning apps that
        students love.
      </p>

      <div className="md:items-start lg:mt-32 gap-y-28 flex flex-col mt-12">
        {ourTeamData.map((teamMember, index) => {
          let isEven = (index + 1) % 2 === 0;
          return (
            <Fragment key={index}>
              <div
                className={`md:flex-row md:gap-10 flex  gap-2 ${
                  isEven ? "flex-col-reverse" : "flex-col"
                }`}
              >
                <div
                  className={`gap-7 flex-col-reverse md:flex-col flex  justify-between`}
                  style={{
                    order: !isEven ? `${index + 2}` : `${index + 1}`,
                  }}
                >
                  <p
                    className={`${
                      isEven ? "ml-auto" : "ml-0"
                    } font-base md:w-1/2 text-left`}
                  >
                    {teamMember.description}
                  </p>
                  <div
                    className={` mx-auto ${
                      isEven ? "md:mr-0" : "md:mx-0"
                    } mt-3 md:mt-0`}
                  >
                    <h2 className="text-xl font-bold">{teamMember.name}</h2>
                    <p className="text-primary text-lg font-semibold">
                      {teamMember.designation}
                    </p>
                  </div>
                </div>

                <div
                  className={`max-w-[300px] max-h-[300px] rounded-[40px] overflow-hidden shrink-0 border mx-auto `}
                  style={{
                    order: !isEven ? `${index + 1}` : `${index + 2}`,
                  }}
                >
                  <Image
                    src={teamMember.image}
                    alt={teamMember.name}
                    width={500}
                    objectFit="cover"
                  />
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default OurTeam;
