"use client";

import Section from "@/app/components/Section";

export default function Hero() {
  return (
    <Section>
      <div className="relative min-h-screen overflow-hidden">
        
        {/* Content */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto text-left gap-3"
        >
          <p className="text-[#00ffd5] text-xl mb-3 leading-snug">
            Hi, my name is
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-none">
            Rizki Syawaludin.
          </h1>

          <h2 className="text-3xl md:text-4xl text-zinc-500 leading-snug">
            <p>5th-Semester Undergraduate Student</p>
            <p>in Information Systems.</p>
          </h2>

          <div className="mt-6 max-w-xl text-xl text-zinc-400 leading-relaxed space-y-1">
            <p>Currently exploring Frontend Development with Next.js,</p>
            <p>while pursuing my interest in UI/UX design.</p>
          </div>
        </section>

      </div>
    </Section>
  );
}
