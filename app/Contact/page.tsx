import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
// Use the public folder URL for static assets (do not import mp4 from /public)

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-24"
    >
      {/* Inner Container */}
      <hr className="border-t border-black mb-6" />
      <div className="w-full max-w-6xl mx-auto p-6 sm:p-8 md:p-12">

        <div className="flex flex-col md:flex-row md:justify-between md:gap-14">

          {/* LEFT */}
          <div className="md:w-1/2 w-full mb-12 md:mb-0">

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase text-black mb-6">
              Contact Me
            </h2>

            <p className=" text-base sm:text-lg md:text-xl text-black mb-8">
              Discuss a project or just want to say hi? My inbox is open for all.
            </p>

            <a
              href="mailto:saumyasingh98982@gmail.com"
              className="block text-lg sm:text-xl md:text-2xl font-medium  mb-10"
            >
              saumyasingh98982@gmail.com
            </a>

            <div className="flex gap-6">

              <a
                href="https://www.linkedin.com/in/saumyasingh003/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:scale-110 transition"
              >
                <FaLinkedinIn className="text-black text-3xl sm:text-4xl" />
              </a>

              <a
                href="https://github.com/saumyasingh003"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:scale-110 transition"
              >
                <FaGithub className="text-black text-3xl sm:text-4xl" />
              </a>

              <a
                href="mailto:saumyasingh98982@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Saumya Singh"
                className="hover:scale-110 transition"
              >
                <FaEnvelope className="text-black text-3xl sm:text-4xl" />
              </a>

            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="md:w-1/2 w-full flex justify-center items-center">

            <video
              src="/Marketing.mp4"
              aria-label="Promotional animation"
              className="w-[400px] h-[300px] object-cover -mt-20 sm:-mt-20"
              autoPlay
              loop
              muted
              playsInline
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
