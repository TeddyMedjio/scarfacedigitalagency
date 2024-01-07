import { WORK } from "@/constants";
import Image from "next/image";

const Work = () => {
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
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-20 max-container padding-container">
        {WORK.map((link) => (
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
    </section>
  );
};

export default Work;