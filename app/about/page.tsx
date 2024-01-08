import Great from "@/components/Great";
import Story from "@/components/Story";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ",
};

const Page = () => {
  return (
    <div className="max-container padding-container pt-[120px] lg:pt-[155px]">
      <Great />
      <Story />
    </div>
  );
};

export default Page;
