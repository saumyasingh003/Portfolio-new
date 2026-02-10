"use client";

import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import mainimage from "../../public/mainimage.png";
import { Button } from "@/components/ui/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Full- Stack Development",
      "Front-end Development",
      "Web Designing",
      "Back-end Development",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
   <section
  className="
    relative
    w-full
    bg-white
    flex
    flex-col-reverse
    md:flex-row
    items-center
    gap-2
    sm:gap-3
    md:gap-4
    justify-center
    lg:justify-between

    
   

    px-4
    sm:px-6
    md:px-14
    lg:px-32

    pt-6
    sm:pt-10
    md:pt-0

    pb-10

    min-h-fit
    md:min-h-[90vh]
  "
>

      {/* LEFT SIDE */}
      <div className="w-full max-w-xl text-center md:text-left text-black">
        <p className="text-sm sm:text-base md:text-lg lg:text-3xl font-semibold mb-3 font-quintessential relative ml-32">
          Hi!, I am
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-quintessential ml-32 relative">
          Saumya Singh
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-2xl mb-8 font-quintessential  ml-32 relative">
          I am into{" "}
          <span className="font-semibold underline-offset-4">
            {text}
          </span>
          <Cursor cursorStyle="!" />
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8  ml-32 relative">
          <Button
            variant="outline"
            className="border-black text-black rounded-full px-6 py-3 text-sm md:text-base hover:bg-black hover:text-white transition"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>

          <Button
            className="bg-black   text-white rounded-full px-6 py-3 text-sm md:text-base border border-black hover:bg-white hover:text-black transition"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/17PoL9QqlY8l_OUSzX-dIZgptT449qfrf/view?usp=sharing"
              target="_blank"
            >
              Download CV
            </a>
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start ml-32 relative ">
          <a
            href="https://www.linkedin.com/in/saumyasingh003/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-xl md:text-2xl hover:scale-110 transition" />
          </a>

          <a
            href="https://github.com/saumyasingh003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl md:text-2xl hover:scale-110 transition" />
          </a>

          <a
            href="mailto:saumyasingh98982@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-xl md:text-2xl hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full flex justify-center md:justify-end">
        <div className="relative flex items-center justify-center">
          {/* OUTER RING */}
          <div className="rounded-full border-4 border-black p-2">
            {/* INNER RING */}
            <div className="rounded-full border-2 border-black p-1">
              {/* IMAGE */}
              <div
                className="
                  relative
                  w-[160px] h-[160px]
                  sm:w-[220px] sm:h-[220px]
                  md:w-[300px] md:h-[300px]
                  lg:w-[420px] lg:h-[420px]
                  rounded-full
                  overflow-hidden
                "
              >
                <Image
                  src={mainimage}
                  alt="profile"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
