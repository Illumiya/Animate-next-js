import Image from "next/image";

import leftCornerSVG from "@/assets/images/herosection/left-corner.svg";
import rightCornerSVG from "@/assets/images/herosection/right-corner.svg";

export default function InfoCard({
  infoColor,
  infoSvg,
  count,
  description,
  index = 0,
}) {
  let isEven = (index + 1) % 2 === 0;

  return (
    <div
      className={`${
        isEven ? "md:mt-[4rem]" : "md:mb-[4rem]"
      }  max-w-[254px] rounded-[20px] font-[900] shadow-lg p-8 flex flex-col gap-2 relative border`}
    >
      {isEven ? (
        <Image
          src={rightCornerSVG}
          alt="right-corner"
          className="absolute rotate-90 -bottom-[24px] -right-[24px]"
        />
      ) : (
        <Image
          src={leftCornerSVG}
          alt="left-corner"
          className="absolute -top-[24px] -left-[24px]"
        />
      )}
      <span
        className={`w-12 h-12 rounded-full absolute -top-[24px] left-8 flex justify-center items-center  p-2`}
        style={{
          backgroundColor: infoColor,
        }}
      >
        <Image src={infoSvg} alt={count} />
      </span>
      <h3 className="text-infoBlue1 text-3xl">{count}</h3>
      <p className="text-secondary text-sm">{description}</p>
    </div>
  );
}
