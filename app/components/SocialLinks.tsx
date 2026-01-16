"use client";

import { Instagram, Mail, Linkedin, Github } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="mt-10 flex justify-center gap-6">
      <a
        href="https://instagram.com/rizkisywldn"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-primary transition"
        aria-label="Instagram"
      >
        <Instagram size={22} />
      </a>

      <a
        href="https://www.linkedin.com/in/rizki-syawaludin-641256290"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-primary transition"
        aria-label="LinkedIn"
      >
        <Linkedin size={22} />
      </a>

      <a
        href="https://github.com/dinz01"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-primary transition"
        aria-label="GitHub"
      >
        <Github size={22} />
      </a>
    </div>
  );
}
