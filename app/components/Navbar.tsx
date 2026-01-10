"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-6 md:gap-8 px-6 py-4 md:px-10 rounded-lg border border-zinc-700 bg-background/80 backdrop-blur">
        
        {/* NAV MENU */}
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");

          return (
            <li key={item.href} className="group">
              <a
                href={item.href}
                className={`relative text-sm md:text-base transition ${
                  isActive
                    ? "text-foreground"
                    : "text-zinc-400 hover:text-foreground"
                }`}
              >
                {item.label}
            {/* underline */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left transform bg-foreground transition-transform duration-300 ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </a>
            </li>
          );
        })}

        {/* RESUME BUTTON */}
        <li>
          <a
            href="/CV_Rizki_Syawaludin.pdf"
            download
            className="text-sm md:text-base text-primary border border-primary px-5 py-2 md:px-7 md:py-2.5 rounded-lg hover:bg-primary hover:text-background transition"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
