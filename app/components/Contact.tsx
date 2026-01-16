"use client";

import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-32 text-center scroll-mt-24"
    >
      <span className="font-mono text-sm">
        <span className="text-[#00ffd5]">03.</span>{" "}
        <span className="text-white">What’s Next?</span>
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-4">
        Get In Touch
      </h2>

      <p className="text-zinc-400 mt-6 max-w-xl mx-auto leading-relaxed">
        I'm open to learning opportunities, internships, and collaborations.
        If you're interested in discussing or have any questions,
        feel free to reach out to me via email.
      </p>

      <a
        href="mailto:rizkisyawaludin12@gmail.com"
        className="inline-block mt-10 px-8 py-4 border border-[#00ffd5] text-[#00ffd5] rounded-lg hover:bg-[#00ffd5] hover:text-background transition hover:shadow-[0_0_20px_#00ffd5]"
      >
        Say Hello
      </a>

<SocialLinks />

    </section>
  );
}
