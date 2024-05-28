import Hero from "@/components/Hero";
import { MyGallery } from "@/components/MyGallery";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-300 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* <BackgroundGradientAnimation className="max-w-7xl w-full mx-auto">  */}
      <Navbar />
      <Hero />
      {/* </BackgroundGradientAnimation> */}
      <div className="max-w-7xl w-full mx-auto">
        <MyGallery />
      </div>
      {/* <div className="max-w-7xl w-full relative z-10">
        <Navbar />
        <Hero />
      </div> */}
    </main>
  );
}
