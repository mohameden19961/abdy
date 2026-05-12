export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
        Hi, I'm <span className="text-indigo-600">Your Name</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        A passionate developer building modern web applications with React and Tailwind CSS.
      </p>
      <a
        href="#projects"
        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl"
      >
        View My Work
      </a>
    </section>
  );
}
