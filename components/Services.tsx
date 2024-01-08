import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="max-container padding-container flex flex-col space-y-20 pb-20">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 max-w-[750px] lg:mr-10 pb-10">
          <h3 className="text-blu-50 semi-bold-32 md:semi-bold-47">
            <span className="text-green-50">01</span> User Experience
          </h3>
          <p className="medium-18 text-blu-50 mt-5 lg:mt-10">
            Don’t confuse them when you can convince them. Our focus on
            Exceptional User Experience ensures that every digital interaction
            with your brand takes casual browsers and brings them one step
            closer to being a loyal customer.
          </p>
          <div className=" relative mt-10 border-t-[1px]">
            <div className="absolute top-5 flex gap-5">
              <p className=" text-[10px] md:medium-18 border-[1px] rounded-full px-4 md:px-8 py-2">
                UX Audit
              </p>
              <p className="text-[10px] md:medium-18 border-[1px] rounded-full px-4 md:px-8 py-2">
                Competitor Analysis
              </p>
              <p className="text-[10px] md:medium-18 border-[1px] rounded-full px-4 md:px-8 py-2">
                User Journey
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/user.png"
          height={201}
          width={419}
          alt="worker in office"
          className="w-[119px] lg:w-[419px]"
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 max-w-[750px] lg:mr-10 pb-10">
          <h3 className="text-blu-50 semi-bold-32 md:semi-bold-47">
            <span className="text-green-50">02</span> Development
          </h3>
          <p className="medium-18 text-blu-50 mt-5 lg:mt-10">
            Our expert Front-End Developers are ready to implement the <br />{" "}
            aesthetic of designs into codes adopting the latest framework and{" "}
            <br />
            technology.
          </p>
          <div className=" relative mt-10 border-t-[1px]">
            <div className="absolute top-5 flex gap-5">
              <p className=" text-[10px] md:medium-18 border-[1px] rounded-full px-4 md:px-8 py-2">
                SEO
              </p>
              <p className="text-[10px] md:medium-18 border-[1px] rounded-full px-4 md:px-8 py-2">
                Front-end
              </p>
              <p className="text-[10px] md:medium-18 border-[1px] rounded-full px-4 md:px-8 py-2">
                Website Development
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/finsur.png"
          height={201}
          width={419}
          alt="website"
          className="w-[119px] lg:w-[419px]"
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 max-w-[750px] lg:mr-10 pb-10">
          <h3 className="text-blu-50 semi-bold-32 md:semi-bold-47">
            <span className="text-green-50">03</span> Brand Identity
          </h3>
          <p className="medium-18 text-blu-50 mt-5 lg:mt-10">
            The essential ability to combine empathy, creativity and rationality{" "}
            <br />
            to meet user needs and business success.
          </p>
          <div className=" relative mt-10 border-t-[1px]">
            <div className="absolute top-5 flex gap-5">
              <p className=" text-[10px] md:medium-18 border-[1px] rounded-full px-4 md:px-8 py-2">
                Brand Strategy
              </p>
              <p className="text-[10px] md:medium-18 border-[1px] rounded-full px-4 md:px-8 py-2">
                Branding
              </p>
              <p className="text-[10px] md:medium-18 border-[1px] rounded-full px-4 md:px-8 py-2">
                Brand Assets
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/brand.png"
          height={201}
          width={419}
          alt="Drawer"
          className="w-[119px] lg:w-[419px]"
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 max-w-[750px] lg:mr-10 pb-10">
          <h3 className="text-blu-50 semi-bold-32 md:semi-bold-47">
            <span className="text-green-50">04</span> Visual Design
          </h3>
          <p className="medium-18 text-blu-50 mt-5 lg:mt-10">
            Get your custom and exceptional work of UI and UX design for both{" "}
            <br />
            website and mobile app interface, illustrations, motion graphics all{" "}
            <br />
            toward your needs.
          </p>
          <div className=" relative mt-10 border-t-[1px]">
            <div className="absolute top-5 flex gap-5">
              <p className=" text-[10px] md:medium-18 border-[1px] rounded-full px-4 md:px-8 py-2">
                Design Systems
              </p>
              <p className="text-[10px] md:medium-18 border-[1px] rounded-full px-4 md:px-8 py-2">
                Webdesign
              </p>
              <p className="text-[10px] md:medium-18 border-[1px] rounded-full px-4 md:px-8 py-2">
                Products
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/visual.png"
          height={201}
          width={419}
          alt="worker in office"
          className="w-[119px] lg:w-[419px]"
        />
      </div>
    </div>
  );
};

export default Services;
