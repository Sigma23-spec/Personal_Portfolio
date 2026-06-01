"use client";

import { useState } from "react";
import projectsData from "../lib/projects";
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(null);
  const personalInfo = {
    name: "Dawood Waheed",
    title: "Full Stack Developer",
    location: "Rawalpindi, Pakistan",
    email: "dawood.tech@gmail.com",
    phone: "",
    resume: "/DawoodWaheed(FullStackCv).pdf",
    bio: "Versatile Full Stack Developer and Android engineer specializing in modern web technologies, Kotlin mobile development, AI automation, and real-time applications. Passionate about building scalable solutions that combine cutting-edge frameworks with intelligent systems.",
    about: [
      "I'm a versatile Full Stack Developer with strong expertise across Android development, web development, backend systems, and AI integration. I specialize in building end-to-end digital solutions that combine performance, scalability, and intelligent automation.",
      "On the mobile side, I develop native Android applications using Kotlin along with modern architecture patterns such as MVVM and MVI. I also have experience in cross-platform development using React Native, enabling efficient multi-platform solutions with consistent user experience.",
      "For web development, I work with modern frontend and backend technologies including React, Next.js, Node.js, and RESTful APIs, building responsive and scalable applications. My backend experience includes working with databases such as PostgreSQL, MySQL, Firebase, and MongoDB, designing efficient data models and secure system architectures.",
      "I also integrate AI capabilities into applications, including LLM-powered chatbots, automation agents, and intelligent workflows. My work involves combining AI models with real-world applications to enhance user experience and productivity.",
      "Currently, I am working as an Android Developer in the fintech domain at United Bank Limited (UBL), contributing to enterprise-grade mobile banking solutions focused on performance, security, and scalability.",
      "At present, I am focused on developing enterprise-level systems such as Learning Management Systems and AI-driven platforms, with a strong emphasis on clean architecture, scalability, and performance optimization. I enjoy working on complex, impactful projects and continuously expanding my expertise across modern technologies."
    ],
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 90 }, 
      { name: "Android / Kotlin", level: 85 },
       { name: "ReactNative", level: 85 },
      
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
    projects: projectsData,
    experience: [
      {
        company: "Al Shams Tech",
        position: "Full Stack Developer",
        period: "March 2024 - Present",
        description: "Leading development of EduTrack LMS, a comprehensive Learning Management System. Architected and implemented hybrid database solutions combining Firebase and PostgreSQL for optimal performance. Integrated WebSockets for real-time communication, Firebase Cloud Messaging for push notifications, and developed role-based access control systems. Built responsive interfaces for web and mobile platforms, ensuring seamless user experience across all devices.",
      },
         {
       company: "O3 Interfaces",
       position: "Android Developer",
       period: "Jan 2025 - Present",
       description: "Developing and maintaining enterprise-grade Android applications for United Bank Limited (UBL). Implementing modern Android solutions using Kotlin, Jetpack Compose, MVVM/MVI architecture, Coroutines, Flow, and Dependency Injection. Collaborating with cross-functional teams to deliver secure, scalable, and high-performance fintech features. Contributing to digital banking solutions, API integrations, state management, performance optimization, and code quality improvements while following industry best practices and banking security standards."    },
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
      {activeScreenshot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4">
          <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-slate-900 shadow-2xl ring-1 ring-white/10">
            <button
              type="button"
              onClick={() => setActiveScreenshot(null)}
              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center rounded-full bg-slate-900/90 p-2 text-slate-200 shadow-lg shadow-black/20 transition hover:bg-slate-800"
            >
              <span className="sr-only">Close screenshot</span>
              ✕
            </button>
            <img
              src={activeScreenshot.src}
              alt={activeScreenshot.alt}
              className="w-full max-h-[80vh] object-contain bg-slate-950"
            />
            <div className="border-t border-slate-800 px-6 py-4 bg-slate-950 text-slate-200 text-sm">
              {activeScreenshot.title}
            </div>
          </div>
        </div>
      )}
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg z-50 border-b border-blue-200/50 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              <span className="hidden sm:inline">{personalInfo.name}</span>
              <span className="sm:hidden">DW</span>
            </h1>
            <div className="hidden md:flex gap-4 lg:gap-6">
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
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in-up">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
              >
                Skills
              </a>
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-2xl animate-float hover:scale-110 transition-transform duration-300 cursor-pointer">
              {personalInfo.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4 animate-fade-in-up">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-2 animate-fade-in-up animate-delay-100">
              {personalInfo.title}
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 animate-fade-in-up animate-delay-200">
              📍 {personalInfo.location}
            </p>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed px-4 animate-fade-in-up animate-delay-300">
              {personalInfo.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 px-4 animate-fade-in-up animate-delay-400">
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium hover:from-blue-400 hover:to-indigo-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg text-center"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
              >
                View Work
              </a>
              {personalInfo.resume && (
                <a
                  href={personalInfo.resume}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-lg font-medium hover:from-violet-400 hover:to-indigo-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg flex items-center justify-center gap-2"
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
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md relative z-10 border-y border-blue-100/50 dark:border-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-6 text-center animate-fade-in-up px-4">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 space-y-5 animate-fade-in-up animate-delay-100 text-justify px-4">
            {Array.isArray(personalInfo.about) ? (
              personalInfo.about.map((paragraph, idx) => (
                <p key={idx} className="animate-fade-in-up" style={{animationDelay: `${(idx + 1) * 0.1}s`}}>{paragraph}</p>
              ))
            ) : (
              <p>{personalInfo.about}</p>
            )}
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 px-4">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-700/50 dark:to-slate-800/50 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-blue-200/50 dark:border-slate-600 animate-slide-in-left">
              <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
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
            <div className="bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-slate-700/50 dark:to-slate-800/50 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl hover:from-indigo-50 hover:to-violet-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-indigo-200/50 dark:border-slate-600 animate-slide-in-right">
              <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-4">
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
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-8 sm:mb-12 text-center animate-fade-in-up px-4">
            Skills
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4">
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
      <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md relative z-10 border-y border-indigo-100/50 dark:border-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-8 sm:mb-12 text-center animate-fade-in-up px-4">
            Experience
          </h2>
          <div className="space-y-6 sm:space-y-8 px-4">
            {personalInfo.experience.map((exp, idx) => (
              <div 
                key={idx} 
                className="border-l-4 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-slate-700/30 dark:to-slate-800/30 pl-4 sm:pl-6 pb-6 sm:pb-8 last:pb-0 rounded-r-xl p-4 sm:p-6 hover:shadow-2xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:translate-x-2 hover:-translate-y-1 border-t border-r border-b border-blue-100/50 dark:border-slate-700 animate-slide-in-left"
                style={{
                  borderLeftColor: idx === 0 ? 'rgb(59, 130, 246)' : 'rgb(99, 102, 241)',
                  animationDelay: `${idx * 0.2}s`
                }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                  {exp.position}
                </h3>
                <p className="text-base sm:text-lg bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:text-indigo-400 mb-2 font-medium">
                  {exp.company} • {exp.period}
                </p>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-4 sm:mb-6 text-center animate-fade-in-up px-4">
            Featured Projects
          </h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {personalInfo.projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white/70 dark:bg-slate-800/80 backdrop-blur-md rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-blue-200/50 dark:border-slate-700 group hover:bg-white/90 hover:border-indigo-300/50 animate-scale-in"
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-indigo-400/0 group-hover:from-blue-400/10 group-hover:to-indigo-400/10 rounded-xl transition-all duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300">
                    <Link href={`/projects/${project.slug}`} className="hover:underline">{project.title}</Link>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
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
                  <div className="flex items-center gap-3">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 inline-flex items-center gap-2 group-hover:gap-3"
                      >
                        View Project →
                      </a>
                    ) : project.prototype ? (
                      <a
                        href={project.prototype}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 inline-flex items-center gap-2"
                      >
                        View prototype →
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-sm font-semibold">
                        Prototype coming soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md relative z-10 border-t border-violet-100/50 dark:border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-4 sm:mb-6 animate-fade-in-up px-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 animate-fade-in-up animate-delay-100 px-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mb-6 sm:mb-8 animate-fade-in-up animate-delay-200 px-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 text-white flex items-center justify-center hover:scale-110 hover:rotate-6 hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center hover:scale-110 hover:rotate-6 hover:from-blue-400 hover:to-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-white flex items-center justify-center hover:scale-110 hover:rotate-6 hover:from-sky-300 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            )}
          </div>
          <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 justify-center flex-wrap animate-fade-in-up animate-delay-300 px-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium hover:from-blue-400 hover:to-indigo-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-200/50 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 px-4">
            © {new Date().getFullYear()} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">{personalInfo.name}</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
