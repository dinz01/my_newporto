"use client";

import { motion } from "framer-motion";
import Section from "@/app/components/Section";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Luxiousz Store Website",
    description:
      "Online marketplace for buying and selling PUBG Mobile accounts, built with Laravel, featuring account listings, secure transactions, and contact options",
    tech: ["Laravel", "Javascript", "Bootstrap"],
    image: "/Project_Luxiousz.png",
    link: "https://github.com/dinz01/Luxiousz-Store   ",
  },
  {
    title: "UI/UX Designer Career Booklet",
    description:
      "A guide for recent high school/college graduates and college students interested in a career in UI/UX Design.",
    tech: ["Canva"],
    image: "/Project_Booklet.png",
    link: "https://www.canva.com",
  },
];


export default function Projects() {
  return (
    <Section>
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24"
      >
        {/* Title */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Projects
          </h2>
          <div className="flex-1 h-px bg-zinc-700" />
        </div>

        {/* Project List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative bg-zinc-900 rounded-lg p-6 border border-zinc-800"
                >
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    {/* Image */}
                <div className="relative group rounded overflow-hidden border border-zinc-800">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="
                    object-cover
                    w-full
                    h-full
                    grayscale
                    group-hover:grayscale-0
                    group-hover:scale-110
                    transition
                    duration-500
                    ease-out
                    "
                />

                {/* overlay gelap */}
                <div className="
                    absolute inset-0
                    bg-black/30
                    group-hover:bg-black/0
                    transition
                    duration-500
                " />
                </div>

                    {/* Content */}
                    <div>
                    <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                    </h3>

                    <p className="text-sm text-zinc-400 mt-2">
                        {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-3 mt-4 text-xs font-mono text-zinc-400">
                        {project.tech.map((item, i) => (
                        <li key={i}>{item}</li>
                        ))}
                    </ul>

                    {project.link && (
                        <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-5 text-primary hover:underline text-sm"
                        >
                        More →
                        </a>
                    )}
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Section>
  );
}
