import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="
        w-full
       rounded-2xl
        py-14
        sm:py-18
        md:py-24
        px-4
        sm:px-8
        md:px-20
        lg:px-32
      "
    >
      {/* Heading */}
      <hr className="border-t border-black mb-14" />
      <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold uppercase text-black text-center mb-12 md:mb-16">
        Education
      </h2>

      {/* Card */}
      <div className="w-full max-w-5xl mx-auto border border-black p-6 sm:p-8 md:p-12 grid gap-8 md:grid-cols-2 rounded-lg shadow-sm">

        {/* LEFT */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-2">
            Amity University, Patna
          </h3>

          <p className="font-medium text-black">
            B.Tech in Computer Science Engineering
          </p>

          <p className="text-xs sm:text-sm uppercase tracking-widest text-black/70 mb-6">
            2022 – Present
          </p>

          <a
            href="https://amity.edu/Bihar/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              border
              border-black
              px-6
              py-2
              rounded-full
              hover:bg-black hover:text-white
              transition
            "
          >
            Visit University
          </a>
        </div>

        {/* RIGHT */}
        <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base text-black/80 leading-relaxed">
          <li>
            Studying core subjects including C, C++, Java, Python, AI, DSA, OS,
            TOC, DBMS, and Networking.
          </li>
          <li>
            Learning software engineering principles and development
            methodologies.
          </li>
          <li>
            Working on full-stack web applications using React, Node.js, and
            Express.
          </li>
          <li>
            Building RESTful APIs and responsive UI components for production-
            ready systems.
          </li>
        </ul>

      </div>
    </section>
  );
};

export default Education;
