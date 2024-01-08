"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";

const Dropdown = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  return (
    <div className=" lg:hidden">
      <button onClick={() => setToggle((prev) => !prev)}>
        <Image src="/menu.svg" width={34} height={34} alt="icon menu" />
      </button>

      <div
        className={`bg-white overflow-hidden w-full h-screen absolute right-0 -top-8 z-50  transition-all duration-700 ease-in-out ${
          toggle
            ? "translate-x-0 opacity-100"
            : "translate-x-[1500px] md:opacity-100 opacity-0"
        }`}
      >
        <button
          onClick={() => setToggle(!toggle)}
          className="medium-18 ml-10 mt-10 bg-green-50 p-4 rounded-full"
        >
          <Image src="/close.svg" height={20} width={20} alt="icon close" />
        </button>
        <Link
          href="mailto:hello@medjio.me"
          className="btn_dark absolute right-5 top-12"
        >
          Contact Us
        </Link>
        <ul className="mt-20 ml-10 flex flex-col -z-50">
          <p className="medium-18 text-gray-400 mb-10 uppercase">Menu</p>
          {NAV_LINKS.map((link) => (
            <li
              onClick={() => setToggle(!toggle)}
              key={link.key}
              className="text-6xl font-header text-blu-50 pb-10"
            >
              <Link
                href={link.href}
                key={link.key}
                className={`link ${pathname === `${link.href}`}`}
              >
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Image
          src="/graph.svg"
          height={250}
          width={300}
          alt="graph"
          className="absolute bottom-0 top-0 right-10 -z-10 "
        />
      </div>
    </div>
  );
};

export default Dropdown;
