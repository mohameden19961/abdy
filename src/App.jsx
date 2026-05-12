import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
              >
                <div className="h-40 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Project {i}
                </h3>
                <p className="text-gray-600">
                  A brief description of this project goes here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have a project in mind? Let's work together.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Say Hello
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </>
  )
}

export default App
