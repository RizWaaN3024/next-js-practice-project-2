import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-200 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full relative z-10">
        
      </div>
      <BackgroundGradientAnimation className="relative">
        <Navbar />
        <Hero />
        </BackgroundGradientAnimation>
    </main>
  );
}
