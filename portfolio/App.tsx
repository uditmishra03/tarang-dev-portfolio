import React, { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsGrid } from './components/SkillsGrid';
import { RoleRotator } from './components/RoleRotator';
import { RandomQuote } from './components/RandomQuote';
import { EXPERIENCE, SKILLS, WHAT_I_DO, SOCIALS } from './constants';
import { ArrowRight, Sun, Moon, Download } from './components/Icons';

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Handle Theme Toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#050a18'; // Original Dark Navy
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ['home', 'about', 'experience', 'what-i-do', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? 'dark' : ''} text-slate-900 dark:text-slate-100 transition-colors duration-300`}>

      {/* Navbar */}
      <Nav activeSection={activeSection} onNavClick={scrollToSection} />

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-32 sm:px-12">

        {/* HERO SECTION */}
        <section id="home" className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur transition duration-500 hover:opacity-100"></div>
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white dark:border-[#050a18] bg-white dark:bg-[#050a18]">
              {/* Using a placeholder avatar since I cannot access the real image */}
              <img
                src="https://ui-avatars.com/api/?name=Udit+Mishra&background=0D8ABC&color=fff&size=160"
                alt="Udit Mishra"
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
          </div>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl md:text-7xl">
            Hello, I'm <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Udit Mishra</span>
          </h1>

          <div className="mb-6 flex w-full items-center justify-center">
            <RoleRotator />
          </div>

          <div className="mb-8 flex items-center justify-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Currently in Dubai <span className="text-[10px] font-bold opacity-60">AE</span>
          </div>

          <div className="mb-10 w-full">
            <RandomQuote />
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <button onClick={() => scrollToSection('contact')} className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-blue-500/25">
              Get in touch <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 px-8 py-3.5 text-sm font-bold text-slate-700 dark:text-slate-200 shadow-lg transition-all hover:scale-105 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Resume <Download size={16} className="transition-transform group-hover:translate-y-1" />
            </a>

            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-white hover:scale-110 shadow-sm"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Vertical divider line effect at bottom of hero */}
          <div className="mt-24 h-24 w-px bg-gradient-to-b from-blue-500/50 to-transparent"></div>
        </section>


        {/* ABOUT ME SECTION */}
        <section id="about" className="py-20 text-center">
          <h2 className="mb-12 text-4xl font-bold text-slate-900 dark:text-slate-100">About Me</h2>

          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            <p>
              I'm a DevOps Evangelist and Cloud Architect with more than a decade of experience designing scalable, secure, and automated infrastructure. My work sits at the intersection of cloud architecture, platform engineering, and team enablement — helping organizations streamline operations, accelerate delivery, and operate with confidence.
            </p>
            <p>
              Over the years, I've designed and managed complex cloud environments across AWS and Oracle Cloud, led high-impact automation initiatives, and built observability systems capable of supporting mission-critical workloads. I take pride in applying DevOps principles not just to tools and pipelines, but also to culture.
            </p>
            <p>
              In recent years, I've been focused on integrating AI into DevOps workflows — developing internal tools that use natural language interfaces to surface infrastructure insights and improve operational visibility.
            </p>
            <p className="font-medium text-slate-900 dark:text-slate-200">
              Today, I continue to consult, build, and lead with a focus on delivering infrastructure that scales with your ambition — securely, efficiently, and reliably.
            </p>
          </div>

          <div className="mt-24">
            <h3 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100">Technical Skills</h3>
            <p className="mb-10 text-slate-600 dark:text-slate-400">Core competencies and specialized skills in DevOps and cloud infrastructure</p>
            <SkillsGrid skills={SKILLS} />
          </div>
        </section>


        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Professional Experience</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">My journey through various roles and responsibilities.</p>
          </div>
          <ExperienceTimeline data={EXPERIENCE} />
        </section>


        {/* WHAT I DO SECTION */}
        <section id="what-i-do" className="py-20">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">What I Do</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">This is what I do best - turning complex challenges into elegant solutions</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {WHAT_I_DO.map((service) => (
              <div key={service.id} className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-blue-500/30 dark:hover:bg-slate-900/80">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">{service.title}</h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>


        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 text-center">
          <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-slate-100">Get In Touch</h2>
          <p className="mx-auto mb-10 max-w-lg text-slate-600 dark:text-slate-400">
            Feel free to reach out via email or schedule a meeting through Calendly.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contact@tarang.cloud"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition-transform hover:-translate-y-1 hover:bg-blue-500 sm:w-auto"
            >
              <ArrowRight className="h-5 w-5" /> Email Me Directly
            </a>
            <a
              href="#"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-8 py-4 font-bold text-slate-600 dark:text-slate-300 transition-all hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 sm:w-auto"
            >
              <span className="text-xl">📅</span> Book a Call on Calendly
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
          <div className="mb-4 flex justify-center gap-6">
            {SOCIALS.map((social) => (
              <a key={social.name} href={social.url} className="text-slate-500 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-500 transition-colors">
                <social.icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-600">
            © {new Date().getFullYear()} Udit Mishra. All rights reserved. <br />
            <span className="text-xs opacity-70">Based in India</span>
          </p>
        </footer>

      </main>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-xl transition-all hover:border-blue-500 hover:text-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

    </div>
  );
}

export default App;