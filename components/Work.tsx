"use client";

import { WORK } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";

const Work = () => {
  const [loading, setLoading] = useState(2);

  const showMore = () => {
    setLoading(loading + loading);
  };

  const slice = WORK.slice(0, loading);
  return (
    <section className="bg-[#0B1217] overflow-hidden py-16 relative -z-20">
      <Image
        src="/draw.svg"
        height={652}
        width={652}
        alt="stroke draw"
        className=" absolute top-0 right-0 -z-10"
      />
      <Image
        src="/draw-2.svg"
        height={652}
        width={652}
        alt="stroke draw"
        className=" absolute top-0 left-0 -z-10"
      />
      <Image
        src="/draw-3.svg"
        height={868}
        width={1153}
        alt="stroke draw"
        className=" absolute bottom-0 left-0 -z-10"
      />
      <div className="max-container padding-container mb-20">
        <Reveal>
          <h2 className="semi-bold-32 md:semi-bold-76 flex items-center text-white">
            <span>
              <Image
                src="/graph.svg"
                height={72}
                width={25}
                alt="icon logo"
                className=" mr-4 md:mr-8 h-[52px] md:h-[72px] "
              />
            </span>
            Our Recent <span className="text-green-50 ml-3">Work</span>
          </h2>
        </Reveal>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-20 max-container padding-container">
        {slice.map((link) => (
          <div key={link.title} className=" space-y-5 pb-10">
            <p className="bold-29 text-white">{link.title}</p>
            <Image
              src={link.img}
              width={628}
              height={392}
              alt="preview image"
              className=" rounded w-full "
            />
            <div className="relative">
              <p className="medium-18 text-white bg-green-60 px-5 py-2 rounded-full border border-green-50 absolute">
                {link.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center pb-10 pt-20">
        <button
          className="medium-18 text-blu-50 bg-green-50 animate-pulse px-5 py-2 rounded-full"
          onClick={() => showMore()}
        >
          Show more
        </button>
      </div>
    </section>
  );
};

export default Work;
