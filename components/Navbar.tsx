"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={
        navbar
          ? " w-full pt-[120px] fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 backdrop-blur-sm bg-white/25 transition-all duration-300 ease-in-out"
          : " w-full mt-[60px] fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      }
    >
      <div className="max-container flex items-center justify-between w-full pb-4 padding-container">
        <Link href="/">
          <Image
            src="/logo.svg"
            height={34}
            width={85}
            alt="logo scarface digital agency"
          />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="regular-18 text-blu-50 cursor-pointer pb-[1.5px] transition-all duration-500 hover:bg-[#A7F400] px-3 py-1 rounded-lg"
            >
              <Link
                href={link.href}
                key={link.key}
                className={`link ${
                  pathname === `${link.href}`
                    ? "font-bold transition-all duration-500 bg-[#A7F400] px-4 py-1 rounded-lg"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Dropdown />
        <Link
          href="mailto:hello@medjio.me"
          className="btn_dark hidden lg:block"
        >
          Contact
        </Link>
      </div>
      <div className="h-[1px] w-full bg-blu-50 "></div>
    </nav>
  );
};

export default Navbar;
