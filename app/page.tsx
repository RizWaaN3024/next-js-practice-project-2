import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="realative bg-black-200 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        Hello
        <Hero />
      </div>
    </main>
  );
}
