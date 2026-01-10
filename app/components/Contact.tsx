export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-32 text-center scroll-mt-24"
    >
      <span className="text-primary font-mono text-sm">
        03. What’s Next?
      </span>

      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-4">
        Get In Touch
      </h2>

      <p className="text-zinc-400 mt-6 max-w-xl mx-auto leading-relaxed">
        Saya terbuka untuk kesempatan belajar, magang, maupun kolaborasi.
        Jika Anda tertarik untuk berdiskusi atau memiliki pertanyaan,
        silakan hubungi saya melalui email.
      </p>

      <a
        href="mailto:emailkamu@gmail.com"
        className="inline-block mt-10 px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-background transition"
      >
        Say Hello
      </a>
    </section>
  );
}
