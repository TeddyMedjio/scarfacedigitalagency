import Image from "next/image";
import React from "react";

const Slide = () => {
  return (
    <div className="lg:py-20 slider overflow-hidden">
      <div className="slide-track">
        {/* slide 9 */}
        <div className="slide">
          <Image
            src="/challenge.svg"
            height={50}
            width={192}
            alt="logo challenge international"
          />
        </div>
        <div className="slide ">
          <Image
            src="/marketing.svg"
            height={66}
            width={119}
            alt="logo marketing"
          />
        </div>
        <div className="slide">
          <Image
            src="/finsura.svg"
            height={62}
            width={256}
            alt="logo finsura"
          />
        </div>
        <div className="slide">
          <Image src="/zuhe.svg" height={74} width={163} alt="logo zuhe" />
        </div>
        <div className="slide">
          <Image
            src="/scarface.svg"
            height={75}
            width={66}
            alt="logo scarface"
          />
        </div>
        <div className="slide">
          <Image
            src="/challenge.svg"
            height={50}
            width={192}
            alt="logo challenge international"
          />
        </div>
        <div className="slide">
          <Image
            src="/marketing.svg"
            height={66}
            width={119}
            alt="logo marketing"
          />
        </div>
        <div className="slide">
          <Image
            src="/finsura.svg"
            height={62}
            width={256}
            alt="logo finsura"
          />
        </div>
        <div className="slide">
          <Image src="/zuhe.svg" height={74} width={163} alt="logo zuhe" />
        </div>

        {/* slide 9 */}

        {/* slide 9 */}
        <div className="slide">
          <Image
            src="/challenge.svg"
            height={50}
            width={192}
            alt="logo challenge international"
          />
        </div>
        <div className="slide">
          <Image
            src="/marketing.svg"
            height={66}
            width={119}
            alt="logo marketing"
          />
        </div>
        <div className="slide">
          <Image
            src="/finsura.svg"
            height={62}
            width={256}
            alt="logo finsura"
          />
        </div>
        <div className="slide">
          <Image src="/zuhe.svg" height={74} width={163} alt="logo zuhe" />
        </div>
        <div className="slide">
          <Image
            src="/scarface.svg"
            height={75}
            width={66}
            alt="logo scarface"
          />
        </div>
        <div className="slide">
          <Image
            src="/challenge.svg"
            height={50}
            width={192}
            alt="logo challenge international"
          />
        </div>
        <div className="slide">
          <Image
            src="/marketing.svg"
            height={66}
            width={119}
            alt="logo marketing"
          />
        </div>
        <div className="slide">
          <Image
            src="/finsura.svg"
            height={62}
            width={256}
            alt="logo finsura"
          />
        </div>
        <div className="slide">
          <Image src="/zuhe.svg" height={74} width={163} alt="logo zuhe" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
