"use client";
import React, { useEffect, useRef, Dispatch, SetStateAction } from "react";
import { gsap } from "gsap";

interface PreLoaderProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const PreLoader: React.FC<PreLoaderProps> = ({ setLoading }) => {
  const preLoaderRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timeLine = gsap.timeline();
    timeLine
      .fromTo(
        nameRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .to(nameRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.in",
        delay: 1,
      })
      .call(() => setLoading(false));
  }, [setLoading]);
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black-100 z-50"
      ref={preLoaderRef}
    >
      <div className="text-center">
        <h1
          ref={nameRef}
          className="text-5xl text-white opacity-0 transform translate-y-full"
        >
          Rizwaan Ansari
        </h1>
      </div>
    </div>
  );
};

export default PreLoader;
