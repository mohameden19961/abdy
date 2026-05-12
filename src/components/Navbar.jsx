export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-gray-900">
          My Portfolio
        </a>
        <div className="flex gap-6">
          <a href="#home" className="text-gray-600 hover:text-gray-900 transition">
            Home
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
