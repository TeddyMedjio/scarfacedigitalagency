import Great from "@/components/Great";
import Principle from "@/components/Principle";
import Story from "@/components/Story";
import Slide from "@/components/Slide";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ",
};

const Page = () => {
  return (
    <div className="max-container padding-container pt-[120px] lg:pt-[155px]">
      <Great />
      <Story />
      <Principle />
      <Slide />
    </div>
  );
};

export default Page;
