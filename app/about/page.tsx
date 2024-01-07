import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ",
};

const Page = () => {
  return (
    <>
      <div className="max-container padding-container pt-[120px] lg:pt-[155px]">
        <h1 className="text-blu-50 extra-desk font-header">
          where great ideas
        </h1>
      </div>
    </>
  );
};

export default Page;
