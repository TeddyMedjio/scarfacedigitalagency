import Meett from "@/components/Meett";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services ",
};

const Page = () => {
  return (
    <div className="pt-[120px] lg:pt-[155px]">
      <Meett />
      <Services />
    </div>
  );
};

export default Page;
