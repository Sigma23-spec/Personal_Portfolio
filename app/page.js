export default function Home() {
  const personalInfo = {
    name: "Dawood Waheed",
    title: "Full Stack Developer",
    location: "Rawalpindi, Pakistan",
    email: "dawood.tech@gmail.com",
    phone: "",
    resume: "/Dawood Waheed.pdf",
    bio: "Versatile Full Stack Developer specializing in modern web technologies, AI automation, and real-time applications. Passionate about building scalable solutions that combine cutting-edge frameworks with intelligent systems.",
    about: [
      "I'm a dedicated Full Stack Developer with expertise spanning across modern JavaScript frameworks, database technologies, and AI integration. My passion lies in creating innovative solutions that solve real-world problems through clean, efficient code and intelligent automation.",
      "I specialize in building full-stack applications with hybrid architectures, implementing real-time communication systems using WebSockets, and integrating AI capabilities including LLM-powered chatbots and automation agents. My experience includes working with various databases (PostgreSQL, MySQL, Firebase, MongoDB) and modern frameworks like Next.js, React, and Node.js.",
      "Currently, I'm developing enterprise-level Learning Management Systems and AI-powered applications, focusing on scalability, performance, and user experience. I thrive in collaborative environments where I can contribute to impactful projects and continuously expand my technical expertise.",
    ],
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 90 },
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "Firebase", level: 85 },
      { name: "WebSockets", level: 82 },
      { name: "AI/LLM Integration", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "RESTful APIs", level: 90 },
    ],
    projects: [
      {
        title: "EduTrack LMS",
        description: "A comprehensive full-stack Learning Management System designed to streamline digital education for institutes, teachers, and students. Features include real-time collaboration, role-based access control, live messaging, course enrollment, assignment management, and performance tracking. Implemented hybrid database architecture combining Firebase for real-time updates and PostgreSQL for structured storage, ensuring both scalability and data consistency.",
        tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Firebase", "WebSockets"],
        link: "https://edutrack-dev.vercel.app/admin/dashboard",
      },
    ],
    experience: [
      {
        company: "HH TECH HUB",
        position: "Full Stack Developer",
        period: "Oct 2024 - Present",
        description: "Developing full-stack applications using modern JavaScript frameworks and technologies. Working on multiple client projects, implementing scalable solutions with focus on performance optimization and user experience. Collaborating with cross-functional teams to deliver high-quality web applications.",
      },
      {
        company: "Al Shams Tech",
        position: "Full Stack Developer",
        period: "March 2024 - Present",
        description: "Leading development of EduTrack LMS, a comprehensive Learning Management System. Architected and implemented hybrid database solutions combining Firebase and PostgreSQL for optimal performance. Integrated WebSockets for real-time communication, Firebase Cloud Messaging for push notifications, and developed role-based access control systems. Built responsive interfaces for web and mobile platforms, ensuring seamless user experience across all devices.",
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "Arid Agriculture University",
        year: "2025",
      },
    ],
    socialLinks: {
      github: "https://github.com/Sigma23-spec",
      linkedin: "http://www.linkedin.com/in/dawood-waheed-17247725b",
      twitter: "",
      portfolio: "https://edutrack-dev.vercel.app/admin/dashboard",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 via-indigo-50 to-violet-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg z-50 border-b border-blue-200/50 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              {personalInfo.name}
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#skills" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group">
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#experience" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group">
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#projects" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-float hover:scale-110 transition-transform duration-300 cursor-pointer">
              {personalInfo.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              {personalInfo.name}
            </h1>
            <p className="text-2xl sm:text-3xl text-slate-700 dark:text-slate-300 mb-2 animate-fade-in-up animate-delay-100">
              {personalInfo.title}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 animate-fade-in-up animate-delay-200">
              📍 {personalInfo.location}
            </p>
            <p className="max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300 leading-relaxed animate-fade-in-up animate-delay-300">
              {personalInfo.bio}
            </p>
            <div className="flex gap-4 justify-center mt-8 flex-wrap animate-fade-in-up animate-delay-400">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium hover:from-blue-400 hover:to-indigo-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href={personalInfo.socialLinks.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View Work
              </a>
              {personalInfo.resume && (
                <a
                  href={personalInfo.resume}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-lg font-medium hover:from-violet-400 hover:to-indigo-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 sm:px-8 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md relative z-10 border-y border-blue-100/50 dark:border-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-6 text-center animate-fade-in-up">
            About Me
          </h2>
          <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 space-y-4 animate-fade-in-up animate-delay-100">
            {Array.isArray(personalInfo.about) ? (
              personalInfo.about.map((paragraph, idx) => (
                <p key={idx} className="animate-fade-in-up" style={{animationDelay: `${(idx + 1) * 0.1}s`}}>{paragraph}</p>
              ))
            ) : (
              <p>{personalInfo.about}</p>
            )}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-700/50 dark:to-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-blue-200/50 dark:border-slate-600 animate-slide-in-left">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                🎓 Education
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
            <div className="bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-slate-700/50 dark:to-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:from-indigo-50 hover:to-violet-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-indigo-200/50 dark:border-slate-600 animate-slide-in-right">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-4">
                📧 Contact Info
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                {personalInfo.email}
              </p>
              {personalInfo.phone && (
                <p className="text-slate-700 dark:text-slate-300 mt-2">
                  📱 {personalInfo.phone}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 sm:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-12 text-center animate-fade-in-up">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {personalInfo.skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="mb-6 p-4 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-blue-100/50 dark:border-slate-700 animate-scale-in"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-blue-100 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 h-4 rounded-full transition-all duration-1000 ease-out relative overflow-hidden hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 sm:px-8 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md relative z-10 border-y border-indigo-100/50 dark:border-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-12 text-center animate-fade-in-up">
            Experience
          </h2>
          <div className="space-y-8">
            {personalInfo.experience.map((exp, idx) => (
              <div 
                key={idx} 
                className="border-l-4 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-slate-700/30 dark:to-slate-800/30 pl-6 pb-8 last:pb-0 rounded-r-xl p-6 hover:shadow-2xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:translate-x-2 hover:-translate-y-1 border-t border-r border-b border-blue-100/50 dark:border-slate-700 animate-slide-in-left"
                style={{
                  borderLeftColor: idx === 0 ? 'rgb(59, 130, 246)' : 'rgb(99, 102, 241)',
                  animationDelay: `${idx * 0.2}s`
                }}
              >
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                  {exp.position}
                </h3>
                <p className="text-lg bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:text-indigo-400 mb-2 font-medium">
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
      <section id="projects" className="py-20 px-6 sm:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-12 text-center animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalInfo.projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white/70 dark:bg-slate-800/80 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-blue-200/50 dark:border-slate-700 group hover:bg-white/90 hover:border-indigo-300/50 animate-scale-in"
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-indigo-400/0 group-hover:from-blue-400/10 group-hover:to-indigo-400/10 rounded-xl transition-all duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:scale-110 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 inline-flex items-center gap-2 group-hover:gap-3"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 sm:px-8 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md relative z-10 border-t border-violet-100/50 dark:border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 animate-fade-in-up animate-delay-100">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex gap-6 justify-center mb-8 animate-fade-in-up animate-delay-200">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 text-white flex items-center justify-center hover:scale-110 hover:rotate-6 hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
              className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center hover:scale-110 hover:rotate-6 hover:from-blue-400 hover:to-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {personalInfo.socialLinks.twitter && (
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-white flex items-center justify-center hover:scale-110 hover:rotate-6 hover:from-sky-300 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            )}
          </div>
          <div className="mt-8 flex gap-4 justify-center flex-wrap animate-fade-in-up animate-delay-300">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium hover:from-blue-400 hover:to-indigo-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 sm:px-8 border-t border-blue-200/50 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">{personalInfo.name}</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
