"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        w-full
        py-16
        sm:py-20
        md:py-24
        px-4
        sm:px-8
        md:px-24
        lg:px-32
      "
    >
      <hr className="border-t border-black mb-14" />

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase text-black">
          Projects
        </h2>
        <p className="italic mt-2 text-sm sm:text-base text-black">
          Some of my personal projects
        </p>
      </div>

      {/* Intro Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-[4/3] ">
            <Image
              src="/ss2.jpg"
              alt="Projects illustration"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <p className="text-center md:text-left text-base sm:text-lg text-black max-w-xl mx-auto">
          My projects utilize a diverse range of technology tools. I have
          experience in developing AI-driven applications, integrating them
          into production systems, and deploying them on cloud platforms.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Cards */}
        {[
          {
            title: "CarrerMind",
            desc:
              "Designed to empower job seekers with AI-generated resumes, cover letters, and career-strength analysis tools.",
            link: "https://career-mind.vercel.app/",
          },
          {
            title: "Zora",
            desc:
              "Full-stack Kanban platform with drag-and-drop UI, role-based authentication, and secure API integration.",
            link: "https://zora-two.vercel.app/",
          },
          {
            title: "NestFile",
            desc:
              "Prisma-powered document management system for scalable secure file storage and retrieval.",
            link: "https://nest-file.vercel.app/sign-in",
          },
          {
            title: "Automentor",
            desc:
              "AI-powered meeting assistant for recording, transcription, and collaborative summaries.",
            link: "https://automentor-three.vercel.app/",
          },
          {
            title: "India Tours",
            desc:
              "Travel discovery platform showcasing destinations across India with rich visuals and intuitive navigation.",
            link: "https://india-tours.vercel.app/",
          },
          {
            title: "Sorting Visualizer",
            desc:
              "Interactive visualization tool for real-time sorting algorithm demonstrations.",
            link: "https://sorting-visualizer-liard-pi.vercel.app/",
          },
        ].map((project) => (
          <Card
            key={project.title}
            className="border border-black rounded-none"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-black/80">
              <p>{project.desc}</p>

              <Button
                variant="outline"
                className="border-black text-black rounded-none"
                asChild
              >
                <a href={project.link} target="_blank">
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="flex justify-center mt-16">
        <Button
          variant="outline"
          className="border-black text-black px-10 py-6"
          asChild
        >
          <a href="https://github.com/saumyasingh003" target="_blank">
            More Projects on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
