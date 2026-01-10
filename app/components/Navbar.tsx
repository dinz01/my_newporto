export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 border-b border-zinc-200">
      <div className="max-w-5xl mx-auto flex justify-between">
        <span className="font-bold">MyNewPorto</span>
        <ul className="flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </ul>
      </div>
    </nav>
  );
}