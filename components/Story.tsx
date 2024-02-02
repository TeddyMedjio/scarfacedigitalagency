import Image from "next/image";
import React from "react";
import { Reveal } from "./Reveal";

const Story = () => {
  return (
    <div className="my-20 relative max-container padding-container">
      <Image
        src="/blur.svg"
        height={834}
        width={852}
        alt="blur color"
        className=" absolute top-10 right-0 -z-10"
      />
      <Reveal>
        <div>
          <h2 className="semi-bold-47 md:semi-bold-76 flex items-center text-blu-50">
            <span>
              <Image
                src="/graph.svg"
                height={72}
                width={25}
                alt="icon logo"
                className=" mr-4 md:mr-8 h-[52px] md:h-[72px] "
              />
            </span>
            Our Story
          </h2>
          <p className="semi-bold-29 text-blu-50 md:ml-16 mt-5">
            Small design studio, powerful creations.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className=" mt-16 md:mt-28 flex flex-col md:flex-row md:items-center w-full">
          <div className="hidden md:block w-[100%] "></div>
          <div className="flex-auto">
            <p className=" regular-18 md:medium-29 text-blu-50">
              In the evolving world of design and development, Scarface Digital
              Agency was born out of a singular vision: to change the global
              design narrative. We saw brands, from start-ups to giants, craving
              designs that weren’t just aesthetically pleasing but also
              user-centric & functional. That’s where we came in. <br /> <br />{" "}
              Today, Scarface Digital Agency is more than just a design studio.
              We’re a movement. A movement towards impeccable design,
              user-centric experiences, and seamless digital solutions. <br />{" "}
              <br /> Join us on this journey.
            </p>

            <div className="space-y-10 space-x-0 mt-10 md:mt-20 md:space-y-0 md:space-x-10 flex flex-col md:flex-row md:items-center">
              {/* <div>
                <p className="bold-18 text-blu-50">Mutius A. Fagbile</p>
                <p className="medium-18 text-blu-50">Co-Founder</p>
              </div> */}
              {/* <div>
                <p className="bold-18 text-blu-50">N. Jean Claude</p>
                <p className="medium-18 text-blu-50">Founder</p>
              </div> */}
            </div>
          </div>
        </div>
      </Reveal>

      {/* animation */}
      {/* <div className="my-28">
        <Image
          src="/pointille.svg"
          height={170}
          width={1274}
          alt="separation"
        />
      </div> */}
    </div>
  );
};

export default Story;
