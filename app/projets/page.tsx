import Projets from "@/components/Projets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets ",
};

const Page = () => {
  return (
    <section>
      <Projets />
    </section>
  );
};

export default Page;
