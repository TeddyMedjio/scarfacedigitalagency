import React from "react";
import { Reveal } from "./Reveal";

const Talk = () => {
  return (
    <section className="bg-[url('/pattern-1.jpg')] object-cover bg-center bg-no-repeat ">
      <div className="max-container padding-container my-10">
        <Reveal>
          <h2 className="medium-29 md:medium-47 lg:medium-76 text-blu-50">
            Presenting superior services through{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-1  before:bg-green-50 relative inline-block">
              <span className="relative">innovative concepts</span>
            </span>{" "}
            that dare to be different
          </h2>
        </Reveal>
      </div>
    </section>
  );
};

export default Talk;
