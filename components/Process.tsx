import { PROCESS } from "@/constants";
import Image from "next/image";
import { Reveal } from "./Reveal";

const Process = () => {
  return (
    <div className="bg-blu-50 overflow-hidden">
      <div className="max-container pt-16">
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
              Our <span className="text-green-50 ml-3">Process</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-20">
              {PROCESS.map((link) => (
                <div key={link.title} className="bg-green-50 p-8 rounded">
                  <div className="h-[66px] w-[56px] mb-5">
                    <Image
                      src={link.icon}
                      height={56}
                      width={41}
                      alt="icon"
                      className=""
                    />
                  </div>

                  <p className="medium-29 text-blu-50 border-blu-50 border-b-[1px] pb-4">
                    {link.title}
                  </p>
                  <p className="bold-14 text-blu-50 mt-4">{link.subtitle}</p>
                  <p className="regular-14 text-blu-50 mt-5">
                    {link.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Process;
