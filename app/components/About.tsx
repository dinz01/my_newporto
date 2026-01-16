"use client";

import Section from "@/app/components/Section";
import Image from "next/image";

export default function About() {
  return (
    <Section>
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-24 scroll-mt-24">

      {/* Title */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-[#00ffd5] font-mono text-sm">01.</span>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          About Me
        </h2>
        <div className="flex-1 h-px bg-zinc-700" />
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* Text */}
        <div className="md:col-span-2 text-zinc-400 leading-relaxed space-y-4">
          <p>
            Hello! I'm <span className="text-foreground">Rizki Syawaludin</span>, a
            5th-Semester Undergraduate Student who is interested in web development, and UI/UX designer
            especially in building modern and responsive websites.
          </p>

          <p>
            I started learning web development through college projects and
            self-learning. Currently exploring <span className="text-foreground">
              Frontend Development and UI/UX Design
            </span>{" "}
            using modern technologies
          </p>

          <p>
            Here are some of the technologies I have recently used and am still learning :
          </p>

          {/* Tech list */}
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
            <li>▸ HTML & CSS</li>
            <li>▸ Laravel</li>
            <li>▸ TypeScript</li>
            <li>▸ Bootstrap</li>
            <li>▸ React</li>
            <li>▸ Next.js</li>
            <li>▸ Tailwind CSS</li>
            <li>▸ Figma</li>
            <li>▸ Canva</li>
          </ul>
        </div>

        {/* Image */}
        <div className="relative group w-full max-w-xs mx-auto">
        <div className="relative z-10 rounded border border-primary p-2 overflow-hidden">
            <Image
            src="/Profile.jpeg"
            alt="Rizki Syawaludin"
            width={400}
            height={400}
            className="
                aspect-square
                rounded
                object-cover
                grayscale
                group-hover:grayscale-0
                group-hover:scale-110
                transition
                duration-500
                ease-out
            "
            />
        </div>
        <div className="absolute inset-0 translate-x-3 translate-y-3 border border-primary rounded -z-10" />
        </div>
      </div>
    </section>
    </Section>
  );
}
