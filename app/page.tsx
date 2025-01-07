import AdsOne from "@/components/Home/adsOne";
import AdsTwo from "@/components/Home/adsTwo";
import BestSeller from "@/components/Home/BestSeller";
import Brands from "@/components/Home/Brands";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="mx-[2%] md:mx-[60px]">
        <Hero />
        <AdsOne/>
        <Categories />
        <BestSeller/>
        <AdsTwo/>
      </div>
      <Brands />
    </section>
  );
}
