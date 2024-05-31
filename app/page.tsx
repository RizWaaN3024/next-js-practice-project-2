import Hero from "@/components/Hero";
import About from "@/components/About";
import { MyGallery } from "@/components/MyGallery";
import { WavyBackground } from "@/components/ui/WavyBackground";
import { useTheme } from "next-themes";

export default function Home() {

  return (
    <main>
      {/* <BackgroundGradientAnimation className="max-w-7xl w-full mx-auto">  */}
      {/* <WavyBackground> */}
      <div className="max-w-7xl w-full mx-auto">
      <Hero />
      <About />
      </div>
      
      {/* </WavyBackground> */}
      
      {/* </BackgroundGradientAnimation> */}
      {/* <div className="max-w-7xl w-full mx-auto">
        // <MyGallery />
      </div> */}
      {/* <div className="max-w-7xl w-full relative z-10">
        <Navbar />
        <Hero />
      </div> */}
    </main>
  );
}
