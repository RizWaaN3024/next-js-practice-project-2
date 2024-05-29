import Hero from "@/components/Hero";
import { MyGallery } from "@/components/MyGallery";
import SocialIcons from "@/components/SocialIcons";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <BackgroundGradientAnimation className="max-w-7xl w-full mx-auto">  */}
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
