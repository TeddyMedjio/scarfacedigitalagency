import Image from "next/image";
import { Reveal } from "./Reveal";

const Hero = () => {
  return (
    <section className=" bg-green-50">
      <Reveal width="100%">
        <div className="mx-auto max-container padding-container pt-[120px] lg:pt-[155px]">
          <div className="flex flex-col lg:flex-row lg:items-center relative">
            <Image
              className="hidden md:block rounded-tl-lg rounded-tr-[100px] rounded-bl-[4px] rounded-br-[4px] lg:absolute"
              src="/hand.jpg"
              height={105}
              width={232}
              alt="picture computer"
            />

            <h1 className="title whitespace-nowrap text-blu-50 font-header uppercase lg:pl-[240px] ">
              Where great ideas
            </h1>
          </div>
          <div className=" gap-5 flex flex-col lg:flex-row lg:items-center -mt-4 md:-mt-10">
            <h1 className="title text-blu-50 whitespace-nowrap font-header uppercase ">
              meet great designs{" "}
            </h1>
            <span className=" hidden bg-blu-50 rounded-full lg:flex items-center justify-center relative cursor-pointer">
              <Image
                className=" z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                src="/arrow.svg"
                height={31}
                width={41}
                alt="arrow"
              />
              <Image
                className=" z-10 animate-wiggle "
                src="/circle.svg"
                height={150}
                width={150}
                alt="circle"
              />
            </span>
          </div>
        </div>
      </Reveal>
      <Reveal width="100%">
        <div className="max-container padding-container mb-10">
          <p className="regular-14 md:regular-18 text-blu-50 max-w-[801px] lg:py-10">
            <span className="bold-18">Scarface Digital Agency</span> - is a
            branding and digital design boutique studio that creates products,
            services, and experiences for good companies. By partnering with
            great companies and brands, we create beautiful and easy to use
            products that connect with your audience.
          </p>
        </div>
      </Reveal>
      <div className="max-container padding-container ">
        <video
          className=" object-cover md:h-[300px] w-full overflow-hidden rounded-tl-[80px] rounded-tr-[80px]  "
          autoPlay
          loop
          muted
          playsInline
          poster="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1704543131/kw5fgucy2z2bm2l3kbxw.jpg"
        >
          <source
            src="https://res.cloudinary.com/dqfd5g2fd/video/upload/v1704540192/yd6i93dbyzr7epgi3yeo.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/dqfd5g2fd/video/upload/v1704540811/qepa3oowzkjhx2rfpurh.webm"
            type="video/webm"
          />
        </video>
      </div>
    </section>
  );
};

export default Hero;
