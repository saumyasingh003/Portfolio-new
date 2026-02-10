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
    justify-center
    md:justify-between
    
    md:px-24
    lg:px-40
    pt-6
    md:pt-0
    min-h-[90vh]
  "
    >
      {/* LEFT SIDE */}
      <div className="max-w-xl text-center md:text-left text-black">
        <p className="text-base sm:text-lg md:text-3xl font-semibold mb-4 font-quintessential">
          Hi!, I am
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 font-quintessential">
          Saumya Singh
        </h1>

        <p className="text-base sm:text-lg md:text-2xl mb-10 font-quintessential">
          I am into{" "}
          <span className="font-semibold  underline-offset-4">{text}</span>
          <Cursor cursorStyle="!" />
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
          <Button
            variant="outline"
            className="border-black text-black rounded-full px-8 py-6 text-base hover:bg-black hover:text-white"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>

          <Button
            className="bg-black text-white rounded-full px-8 py-6 text-base border border-black hover:bg-white hover:text-black"
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
        <div className="flex space-x-4  justify-center mt-4 text-center">
                  <a
                    href="https://www.linkedin.com/in/saumyasingh003/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="text-gray-900 text-3xl" />
                  </a>
                  <a
                    href="https://github.com/saumyasingh003"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-gray-900 text-3xl" />
                  </a>
                  <a
                    href="mailto:saumyasingh98982@gmail.com"
                    className="icon-button google"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope className="text-gray-900 text-3xl" />
                  </a>
                </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">
        <div className="relative flex items-center justify-center">
          {/* OUTER RING */}
          <div className="rounded-full border-4 border-black p-2">
            {/* INNER RING */}
            <div className="rounded-full border-2 border-black p-1">
              {/* IMAGE CIRCLE */}
              <div
                className="
        relative
        w-[220px] h-[220px]
        sm:w-[300px] sm:h-[300px]
        md:w-[420px] md:h-[420px]
        rounded-full
        overflow-hidden
      "
              >
                <Image
                  src={mainimage}
                  alt="profile"
                  fill
                  priority
                  className="object-center object-cover "
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
