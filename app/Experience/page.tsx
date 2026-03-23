import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        w-full
        py-14
        sm:py-18
        md:py-24
        px-4
        sm:px-8
        md:px-20
        lg:px-32
      "
    >
      <hr className="border-t border-black mb-14" />

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold uppercase text-black text-center mb-12 md:mb-16">
        Experiences
      </h2>

      {/* Container */}
      <div className="w-full space-y-10 md:space-y-12">

        {/* ===== ITEM 1 ===== */}
        <div className="border border-black p-5 sm:p-7 md:p-10 grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-4">
            <img src="/rizhobee.png" alt="Rizhobee logo" className="w-20 h-20 object-cover rounded-md" />
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                Rizhobee
              </h3>
              <p className="mt-1 font-medium text-black">
                Full Stack Developer
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-black/70">
                Feb 2025 – Apr 2025
              </p>
            </div>
          </div>

          <ul className="space-y-3 text-sm sm:text-base text-black/80 leading-relaxed list-disc pl-5">
            <li>
              Independently designed and developed a full-fledged, responsive
              web platform, including user interface, server logic, and database architecture.
            </li>
            <li>
              Developed and integrated RESTful APIs to ensure secure and efficient data flow.
            </li>
            <li>
              Leveraged AWS services for scalable deployment and optimized performance.
            </li>
          </ul>
        </div>

        {/* ===== ITEM 2 ===== */}
        <div className="border border-black p-5 sm:p-7 md:p-10 grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-4">
            <img src="/airmuse.jpg" alt="Airmuse logo" className="w-20 h-20 object-cover rounded-md" />
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                Airmuse
              </h3>
              <p className="mt-1 font-medium text-black">
                Frontend Developer
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-black/70">
                Sep 2024 – Nov 2024
              </p>
            </div>
          </div>

          <ul className="space-y-3 text-sm sm:text-base text-black/80 leading-relaxed list-disc pl-5">
            <li>
              Integrated 10+ RESTful APIs with the frontend, improving reliability and performance.
            </li>
            <li>
              Designed 15+ responsive and user-friendly UIs, increasing engagement by 30%.
            </li>
            <li>
              Collaborated in an agile team using React, JavaScript, HTML, and CSS.
            </li>
          </ul>
        </div>

        {/* ===== ITEM 3 ===== */}
        <div className="border border-black p-5 sm:p-7 md:p-10 grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-4">
            <img src="/salesqueen.jpg" alt="Salesqueen logo" className="w-20 h-20 object-cover rounded-md" />
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                Salesqueen Software Solutions
              </h3>
              <p className="mt-1 font-medium text-black">
                Frontend Developer
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-black/70">
                May 2024 – Aug 2024
              </p>
            </div>
          </div>

          <ul className="space-y-3 text-sm sm:text-base text-black/80 leading-relaxed list-disc pl-5">
            <li>
              Developed modular and reusable React components to speed up development.
            </li>
            <li>
              Debugged and optimized frontend logic and API integrations, reducing UI issues by ~30%.
            </li>
            <li>
              Delivered production-ready features aligned with client requirements.
            </li>
          </ul>
        </div>

        {/* ===== ITEM 4 ===== */}
        <div className="border border-black p-5 sm:p-7 md:p-10 grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-4">
            <img src="/iit.png" alt="IIT Patna logo" className="w-20 h-20 object-cover rounded-md" />
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                IIT Patna
              </h3>
              <p className="mt-1 font-medium text-black">
                Research Intern
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-black/70">
                Mar 2024 – Jun 2024
              </p>
            </div>
          </div>

          <ul className="space-y-3 text-sm sm:text-base text-black/80 leading-relaxed list-disc pl-5">
            <li>
              Implemented ML algorithms such as linear and logistic regression with cross-validation.
            </li>
            <li>
              Collaborated on data-driven solutions in interdisciplinary teams.
            </li>
            <li>
              Presented research findings and insights effectively.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;