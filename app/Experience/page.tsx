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
            <img src="/rizhobee.png" alt="Rizhobee logo" className="w-20 h-20 object-cover rounded-md " />
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                Rizhobee
              </h3>

              <p className="mt-1 font-medium text-black">
                Full Stack Developer
              </p>

              <p className="text-xs sm:text-sm uppercase tracking-widest text-black/70">
                Mar 2025 – Apr 2025
              </p>
            </div>
          </div>

          <ul className="space-y-3 text-sm sm:text-base text-black/80 leading-relaxed list-disc pl-5 ">
            <li>
              Independently designed and developed a full-fledged, responsive
              web platform, including user interface, server logic, and database
              architecture.
            </li>
            <li>
              Developed and seamlessly integrated RESTful APIs to ensure secure,
              efficient, and consistent data flow across the tech stack.
            </li>
            <li>
              Leveraged AWS services for scalable deployment, optimized
              performance, and dependable cloud storage solutions.
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
                Sep 2024 – Oct 2024
              </p>
            </div>
          </div>

          <ul className="space-y-3 text-sm sm:text-base text-black/80 leading-relaxed list-disc pl-5 ">
            <li>
              Integrated 10+ RESTful APIs with the frontend, boosting feature
              reliability and improving technical proficiency.
            </li>
            <li>
              Designed and developed 15+ responsive, user-friendly UIs with
              intuitive UX, increasing user engagement by 30%.
            </li>
            <li>
              Collaborated in an agile team of 5+ using React, JavaScript, HTML,
              and CSS, contributing innovative solutions to meet project goals.
            </li>
          </ul>
        </div>

        {/* ===== ITEM 3 ===== */}
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

          <ul className="space-y-3 text-sm sm:text-base text-black/80 leading-relaxed list-disc pl-5 ">
            <li>
              Implemented diverse ML algorithms (e.g., linear regression,
              logistic regression, K-fold cross-validation) on varied datasets
              for predictive modelling.
            </li>
            <li>
              Collaborated on interdisciplinary teams to analyse results and
              propose data-driven solutions.
            </li>
            <li>
              Provided concise summaries of research findings during IT research
              internship.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
