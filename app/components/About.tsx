export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-24 scroll-mt-24"
    >
      {/* Title */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-primary font-mono text-sm">01.</span>
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
            Hello! My name is <span className="text-foreground">Rizki Syawaludin</span>, a
            Fifth-Semester Undergraduate Student who is interested in web development, and UI/UX designer
            especially in building modern and responsive websites.
          </p>

          <p>
            I started learning web development through college projects and
            self-learning. Currently, I focus on <span className="text-foreground">
              Frontend Development
            </span>{" "}
            using modern technologies.
          </p>

          <p>
            Here are some of the technologies I have recently used and am still learning :
          </p>

          {/* Tech list */}
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
            <li>▸ HTML & CSS</li>
            <li>▸ Laravel</li>
            <li>▸ TypeScript</li>
            <li>▸ React</li>
            <li>▸ Next.js</li>
            <li>▸ Tailwind CSS</li>
          </ul>
        </div>

        {/* Image Placeholder */}
        <div className="relative group w-full max-w-xs mx-auto">
          <div className="relative z-10 rounded border border-primary p-2">
            <div className="aspect-square bg-zinc-800 rounded" />
          </div>
          <div className="absolute inset-0 translate-x-3 translate-y-3 border border-primary rounded -z-10" />
        </div>
      </div>
    </section>
  );
}
