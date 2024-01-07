import Image from "next/image";
import React from "react";
import Serv from "./Serv";

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
          <Serv
            title="UI/UX Design"
            description="User interface design or user interface engineering is the
                    design of user interfaces for machines and software, such as
                    computers and other electronic devices, with the focus on
                    maximizing usability and the user experience."
            border
          />

          {/* DEVELOPMENT */}
          <Serv
            title="Development"
            description="Our expert team of front-end developers are ready to
            integrate the beauty of Design into the code using the
            latest frameworks and technologies."
            border
          />

          {/* BRANDING IDENTITY */}
          <Serv
            title="Brand Identity"
            description="It typically refers to key brand elements such as the logo,
                    color scheme, typography and other design components that
                    makes a brand stand out from competitors and recognizable to
                    consumers"
            border
          />

          {/* VISUAL DESIGN */}
          <Serv
            title="Visual Design"
            description="Get your custom and exceptional work of UI and UX design for
            both website and mobile app interface, illustrations, motion
            graphics all toward your needs."
          />
        </div>
      </div>
    </section>
  );
};

export default How;
