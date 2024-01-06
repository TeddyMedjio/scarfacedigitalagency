import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-blu-70 relative">
      <Image
        src="/graph.svg"
        height={0}
        width={0}
        alt="dessin"
        className="hidden md:block absolute right-20 h-full w-auto"
      />
      <div className="max-container padding-container py-10 md:py-24">
        <div className="flex flex-col md:flex-row lg:items-center gap-5 md:gap-10">
          <Link href="/">
            <Image
              src="/logo_initial.svg"
              height={60}
              width={109}
              alt="logo blanc"
            />
          </Link>
          <p className="regular-14 md:regular-18 text-gra-50">
            One of the most important pieces of the <br /> great product
            experience is you.
          </p>
        </div>
        <h2 className="semi-bold-29 md:semi-bold-47 lg:semi-bold-76 text-white py-5">
          Limitless by design
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
          <p className="bold-18 text-white">Write to us at</p>
          <Link
            href="mailto:hello.medjio.me"
            className="text-white border-[1px] border-solid border-green-50 px-4 py-[1px] rounded-full text-center"
          >
            hello@scarfacedigitalagency.com
          </Link>
        </div>
      </div>
      <div className="padding-container max-container pb-3">
        <p className=" text-[10px] md:regular-14 text-gra-50">
          {" "}
          <span className="text-green-50">
            © {new Date().getFullYear()} Scarface Digital Agency
          </span>{" "}
          | Design & Develop by{" "}
          <span className="font-bold text-white underline">
            <Link href="https://www.medjio.me/" target="blank">
              www.medjio.me
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
