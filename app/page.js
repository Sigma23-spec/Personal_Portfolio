import Image from "next/image";

export default function Home() {
  // Dummy data - you'll replace this with your actual information
  const personalInfo = {
    name: "John Anderson",
    title: "Full Stack Developer & UI/UX Designer",
    location: "San Francisco, CA",
    email: "john.anderson@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate developer with 5+ years of experience building innovative web applications. Specialized in React, Node.js, and modern JavaScript frameworks. Love turning complex problems into simple, beautiful solutions.",
    about: "I'm a creative full-stack developer who enjoys building digital experiences that make a difference. With a strong foundation in both frontend and backend development, I bring ideas to life through clean, efficient code and thoughtful design.",
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Next.js", level: 90 },
      { name: "Python", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "AWS", level: 70 },
      { name: "UI/UX Design", level: 85 },
    ],
    projects: [
      {
        title: "E-Commerce Platform",
        description: "Built a full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory management, payment integration, and admin dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "https://example.com",
      },
      {
        title: "Task Management App",
        description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
        tech: ["Next.js", "Firebase", "TypeScript"],
        link: "https://example.com",
      },
      {
        title: "Weather Dashboard",
        description: "Beautiful weather dashboard with interactive maps, forecast predictions, and location-based recommendations.",
        tech: ["React", "D3.js", "OpenWeather API"],
        link: "https://example.com",
      },
    ],
    experience: [
      {
        company: "Tech Innovations Inc.",
        position: "Senior Full Stack Developer",
        period: "2021 - Present",
        description: "Lead development of multiple web applications, mentor junior developers, and collaborate with cross-functional teams to deliver high-quality products.",
      },
      {
        company: "Digital Solutions LLC",
        position: "Full Stack Developer",
        period: "2019 - 2021",
        description: "Developed and maintained web applications using React and Node.js. Improved application performance by 40% through code optimization.",
      },
      {
        company: "StartupXYZ",
        position: "Frontend Developer",
        period: "2018 - 2019",
        description: "Built responsive user interfaces and collaborated with designers to implement pixel-perfect designs.",
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of California, Berkeley",
        year: "2018",
      },
    ],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      portfolio: "https://example.com",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              {personalInfo.name.split(" ")[0]}
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                About
              </a>
              <a href="#skills" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Skills
              </a>
              <a href="#experience" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Experience
              </a>
              <a href="#projects" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Projects
              </a>
              <a href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              {personalInfo.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-400 mb-2">
              {personalInfo.title}
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-500 mb-8">
              {personalInfo.location}
            </p>
            <p className="max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition"
              >
                Get In Touch
              </a>
              <a
                href={personalInfo.socialLinks.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-medium hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 sm:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            About Me
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
            {personalInfo.about}
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Education
              </h3>
              {personalInfo.education.map((edu, idx) => (
                <div key={idx} className="mb-4">
                  <p className="font-medium text-slate-900 dark:text-white">
                    {edu.degree}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    {edu.institution} • {edu.year}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Contact Info
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                📧 {personalInfo.email}
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                📱 {personalInfo.phone}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {personalInfo.skills.map((skill, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 sm:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            {personalInfo.experience.map((exp, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-6 pb-8 last:pb-0">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-1">
                  {exp.position}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                  {exp.company} • {exp.period}
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalInfo.projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 sm:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex gap-6 justify-center mb-8">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center hover:bg-slate-800 dark:hover:bg-slate-100 transition"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center hover:bg-slate-800 dark:hover:bg-slate-100 transition"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={personalInfo.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center hover:bg-slate-800 dark:hover:bg-slate-100 transition"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
          <div className="mt-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 sm:px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
