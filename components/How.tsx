import Image from "next/image";
import Link from "next/link";
import React from "react";

const How = () => {
  return (
    <section className="bg-blu-50 overflow-hidden ">
      <div className="bg-[url('/logo_large.svg')] object-auto bg-center bg-repeat h-full w-full py-16">
        <div className="max-container padding-container z-50">
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
            How we can <span className="text-green-50 ml-3">help</span>
          </h2>
        </div>
        {/* services enumeres */}
        <div className=" mt-5 md:mt-10 lg:mt-36">
          {/* UI/UX DESIGN */}
          <div className="group transition-all duration-500 ease-in-out hover:bg-blu-60 cursor-pointer">
            <Link href="/services">
              <div className=" max-container padding-container ">
                <div className="border-b-[1px] py-8 flex flex-col lg:flex-row lg:items-center">
                  <h3 className=" semi-bold-29 md:semi-bold-47 text-gra-50 flex-1 mb-5 md:mb-0">
                    UI/UX Design
                  </h3>
                  <p className="regular-18 text-gra-50 flex-1 lg:pr-20">
                    User interface design or user interface engineering is the
                    design of user interfaces for machines and software, such as
                    computers and other electronic devices, with the focus on
                    maximizing usability and the user experience.
                  </p>
                  <div className="hidden lg:block border-[1px] rounded-full p-5 transition-all duration-500 ease-in-out  group-hover:bg-green-50 ">
                    <svg
                      width="58"
                      height="57"
                      viewBox="0 0 58 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5959 43.2112L45.0934 15.0442"
                        stroke="#AFFF00"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-blu-50 transition-all duration-500 ease-in-out"
                      />
                      <path
                        d="M43.9182 38.9052L46.0505 14.2395L21.3848 12.1071"
                        stroke="#AFFF00"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-blu-50 transition-all duration-500 ease-in-out"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* DEVELOPMENT */}
          <div className="group transition-all duration-500 ease-in-out hover:bg-blu-60 cursor-pointer">
            <Link href="/services">
              <div className=" max-container padding-container ">
                <div className="border-b-[1px] py-8 flex flex-col lg:flex-row lg:items-center">
                  <h3 className=" semi-bold-29 md:semi-bold-47 text-gra-50 flex-1 mb-5 md:mb-0">
                    Development
                  </h3>
                  <p className="regular-18 text-gra-50 flex-1 lg:pr-20">
                    Our expert team of front-end developers are ready to
                    integrate the beauty of Design into the code using the
                    latest frameworks and technologies.
                  </p>
                  <div className="hidden lg:block border-[1px] rounded-full p-5 transition-all duration-500 ease-in-out  group-hover:bg-green-50 ">
                    <svg
                      width="58"
                      height="57"
                      viewBox="0 0 58 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5959 43.2112L45.0934 15.0442"
                        stroke="#AFFF00"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-blu-50 transition-all duration-500 ease-in-out"
                      />
                      <path
                        d="M43.9182 38.9052L46.0505 14.2395L21.3848 12.1071"
                        stroke="#AFFF00"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-blu-50 transition-all duration-500 ease-in-out"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* BRANDING IDENTITY */}
          <div className="group transition-all duration-500 ease-in-out hover:bg-blu-60 cursor-pointer">
            <Link href="/services">
              <div className=" max-container padding-container ">
                <div className="border-b-[1px] py-8 flex flex-col lg:flex-row lg:items-center">
                  <h3 className=" semi-bold-29 md:semi-bold-47 text-gra-50 flex-1 mb-5 md:mb-0">
                    Brand Identity
                  </h3>
                  <p className="regular-18 text-gra-50 flex-1 lg:pr-20">
                    It typically refers to key brand elements such as the logo,
                    color scheme, typography and other design components that
                    makes a brand stand out from competitors and recognizable to
                    consumers
                  </p>
                  <div className="hidden lg:block border-[1px] rounded-full p-5 transition-all duration-500 ease-in-out  group-hover:bg-green-50 ">
                    <svg
                      width="58"
                      height="57"
                      viewBox="0 0 58 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5959 43.2112L45.0934 15.0442"
                        stroke="#AFFF00"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-blu-50 transition-all duration-500 ease-in-out"
                      />
                      <path
                        d="M43.9182 38.9052L46.0505 14.2395L21.3848 12.1071"
                        stroke="#AFFF00"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-blu-50 transition-all duration-500 ease-in-out"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* VISUAL DESIGN */}
          <div className="group transition-all duration-500 ease-in-out hover:bg-blu-60 cursor-pointer">
            <Link href="/services">
              <div className=" max-container padding-container ">
                <div className="py-8 flex flex-col lg:flex-row lg:items-center">
                  <h3 className=" semi-bold-29 md:semi-bold-47 text-gra-50 flex-1 mb-5 md:mb-0">
                    Visual Design
                  </h3>
                  <p className="regular-18 text-gra-50 flex-1 lg:pr-20">
                    Get your custom and exceptional work of UI and UX design for
                    both website and mobile app interface, illustrations, motion
                    graphics all toward your needs.
                  </p>
                  <div className="hidden lg:block border-[1px] rounded-full p-5 transition-all duration-500 ease-in-out  group-hover:bg-green-50 ">
                    <svg
                      width="58"
                      height="57"
                      viewBox="0 0 58 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5959 43.2112L45.0934 15.0442"
                        stroke="#AFFF00"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-blu-50 transition-all duration-500 ease-in-out"
                      />
                      <path
                        d="M43.9182 38.9052L46.0505 14.2395L21.3848 12.1071"
                        stroke="#AFFF00"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-blu-50 transition-all duration-500 ease-in-out"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
