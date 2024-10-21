import Image from "next/image";
import { MainHeading } from "./components/ui/MainHeading";
import { Paragraph } from "./components/ui/Paragraph";
import HeroImageGrid from "./components/HeroImageGrid/HeroImageGrid";
import Button from "./components/ui/Button/Button";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";

export default function Home() {
  return (
    <main className="mx-16 h-screen flex items-center">
      <div className="flex flex-col justify-between w-full gap-16 ">
        <div className="flex flex-col gap-8 ">
          <MainHeading text="TradeTide" />
          <Paragraph />
          <div className="w-1/4">
            <Button text="Try Now" />
          </div>
        </div>
        {/* <HeroImageGrid /> */}
        <BenefitsSection />
      </div>
    </main>
  );
}
