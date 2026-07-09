export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Available for freelance work
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Your Name
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A passionate developer creating beautiful and functional digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              I&apos;m a full-stack developer with over 5 years of experience building web applications. 
              I specialize in creating modern, responsive websites and applications using the latest web technologies.
            </p>
            <p className="text-muted-foreground mb-4">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open source, 
              or sharing knowledge through tutorials and articles.
            </p>
            <p className="text-muted-foreground">
              I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.
              My goal is to create solutions that not only look great but also solve real problems for users.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                <p className="text-muted-foreground mb-4">
                  A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground">Next.js</span>
                  <span className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground">Tailwind</span>
                  <span className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground">Stripe</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                <p className="text-muted-foreground mb-4">
                  A productivity app with drag-and-drop functionality, real-time collaboration, and team workspaces.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground">React</span>
                  <span className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground">Node.js</span>
                  <span className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground">Socket.io</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  A data visualization dashboard with interactive charts, custom reports, and data export features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground">Vue.js</span>
                  <span className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground">D3.js</span>
                  <span className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground">Firebase</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Social Media App</h3>
                <p className="text-muted-foreground mb-4">
                  A social platform with real-time messaging, media sharing, and content discovery features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground">React Native</span>
                  <span className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground">GraphQL</span>
                  <span className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Skills & Technologies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">React</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Next.js</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">TypeScript</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Tailwind CSS</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Vue.js</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Redux</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Node.js</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Express</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Python</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">PostgreSQL</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">MongoDB</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">GraphQL</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Git</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Docker</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">AWS</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Vercel</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Figma</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Jira</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Others</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">REST APIs</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">WebSockets</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">CI/CD</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Testing</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Agile</span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">Mentoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary rounded-full"></div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                <span className="text-sm text-muted-foreground">2022 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2">Tech Company</p>
              <p className="text-muted-foreground">
                Leading a team of developers, architecting scalable frontend solutions, and implementing best practices for code quality and performance.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary rounded-full"></div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <span className="text-sm text-muted-foreground">2020 - 2022</span>
              </div>
              <p className="text-muted-foreground mb-2">Digital Agency</p>
              <p className="text-muted-foreground">
                Developed and maintained client websites and web applications using modern frameworks and technologies.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary rounded-full"></div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold">Junior Web Developer</h3>
                <span className="text-sm text-muted-foreground">2019 - 2020</span>
              </div>
              <p className="text-muted-foreground mb-2">Startup</p>
              <p className="text-muted-foreground">
                Collaborated with cross-functional teams to build and launch web applications from concept to production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              Email Me
            </a>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
