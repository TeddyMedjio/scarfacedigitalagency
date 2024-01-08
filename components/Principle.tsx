import { PRINCIPLES } from "@/constants";
import Image from "next/image";
import { Reveal } from "./Reveal";

const Principle = () => {
  return (
    <div className=" bg-slate-50 py-20">
      <div className="max-container padding-container">
        <Reveal>
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
            Our Principles
          </h2>
        </Reveal>

        <div>
          <Reveal>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
              {PRINCIPLES.map((link) => (
                <div key={link.id}>
                  <p className="text-green-50 semi-bold-29 border-b-[1px] pb-5">
                    {link.id}
                  </p>
                  <p className="semi-bold-29 text-blu-50 py-2">{link.title}</p>
                  <p className="text-gra-50 medium-18">{link.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Principle;
