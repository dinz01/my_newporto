type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "Website portfolio pribadi yang dibangun menggunakan Next.js dan Tailwind CSS untuk menampilkan profil, project, dan informasi kontak.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Simple CRUD Application",
    description:
      "Aplikasi CRUD sederhana untuk mengelola data menggunakan React dan konsep REST API.",
    tech: ["React", "JavaScript", "API"],
    link: "#",
  },
];

export default function Projects() {
  return (
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
          <div
            key={index}
            className="relative bg-zinc-900 rounded-lg p-6 border border-zinc-800"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {project.title}
            </h3>

            <p className="text-zinc-400 mb-4">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-3 font-mono text-sm text-zinc-500">
              {project.tech.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {project.link && (
              <a
                href={project.link}
                className="inline-block mt-4 text-primary hover:underline text-sm"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
