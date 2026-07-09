import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">My Landing Page</h1>
          <div className="flex gap-4">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-6 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Welcome to My Site</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A simple, fast, and modern landing page built with Next.js and Docker.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Get Started
            </button>
            <button className="px-8 py-3 border border-slate-500 text-white rounded-lg hover:bg-slate-700 transition-colors font-semibold">
              Learn More
            </button>
          </div>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-700 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Fast</h3>
              <p className="text-slate-300">Built with Next.js for optimal performance.</p>
            </div>
            <div className="p-6 bg-slate-700 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Docker Ready</h3>
              <p className="text-slate-300">Easy to containerize and deploy anywhere.</p>
            </div>
            <div className="p-6 bg-slate-700 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Modern</h3>
              <p className="text-slate-300">Styled with Tailwind CSS for a sleek look.</p>
            </div>
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">About Us</h2>
          <div className="max-w-2xl mx-auto text-slate-300">
            <p className="mb-4">
              We build beautiful, performant web applications using modern technologies.
            </p>
            <p>
              Our mission is to make web development accessible and enjoyable for everyone.
            </p>
          </div>
        </section>

        <section id="contact" className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Contact Us
          </button>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-400">
        <p>&copy; 2026 My Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
}