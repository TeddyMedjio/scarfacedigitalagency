import Image from "next/image";
import React from "react";

const Meett = () => {
  return (
    <div className="max-container padding-container relative">
      <Image
        src="/blur.svg"
        height={834}
        width={852}
        alt="blur color"
        className=" absolute top-10 right-0 -z-10"
      />
      <div className="max-w-[929px]">
        <div className="flex items-start ">
          <Image
            src="/graph.svg"
            height={72}
            width={25}
            alt="icon logo"
            className=" mr-4 md:mr-8 mt-3 h-[52px] md:h-[72px] "
          />
          <h2 className="bold-29 md:bold-76 text-blu-50 leading-tight">
            Meet seamless digital experience
          </h2>
        </div>
        <p className="semi-bold-18 md:semi-bold-29 text-blu-50 md:ml-16 mt-5 md:mt-10 md:w-[90%] mb-20">
          Build a future-proof digital experience with design partners that
          think both – form and function.
        </p>
      </div>
      <div className="border-b-[1px] mb-10"></div>
    </div>
  );
};

export default Meett;
