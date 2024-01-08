import Image from "next/image";
import Link from "next/link";
import React from "react";

const Great = () => {
  return (
    <section className="max-container padding-container ">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-10">
        <div className=" space-y-5 flex-initial w-full ">
          <Image
            src="/logo_color.svg"
            height={108}
            width={195}
            alt="logo"
            className="hidden lg:block"
          />
          <p className="semi-bold-29 text-blu-50">
            Great ideas need great designs to stand out. Bring your idea to life
            with our expertise and a dedicated design & dev team by your side.
          </p>
          <div className="relative px-8 py-2">
            <Link
              href="mailto:hello@medjio.me"
              className="btn_dark absolute top-0 left-0"
            >
              Discuss a projet
            </Link>
          </div>
        </div>
        <Image
          src="/banner.png"
          height={561}
          width={628}
          alt="banner image"
          className="flex-auto w-full"
        />
      </div>
    </section>
  );
};

export default Great;
