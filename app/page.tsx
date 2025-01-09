import AdsOne from "@/components/Home/adsOne";
import AdsTwo from "@/components/Home/adsTwo";
import BestSeller from "@/components/Home/BestSeller";
import Brands from "@/components/Home/Brands";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <div className="mx-[2%] xl:mx-[60px] ">
        <Hero />
        <Categories />
        <AdsOne />
        <BestSeller />
        <AdsTwo />
      </div>
      <Brands />
    </section>
  );
}
