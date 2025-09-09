import { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Reusable animated page wrapper
function Page({ children }) {
  const prefersReduced = useReducedMotion();
  const transition = prefersReduced
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0, transition }}
      exit={{ opacity: 0, y: -12, transition }}
    >
      {children}
    </motion.div>
  );
}

// Scroll to top on route change (nice w/ transitions)
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);
  return null;
}

// --- App shell (dark mode + nav) ---
export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 dark:from-slate-900 dark:to-slate-950 dark:text-slate-100">
      <ScrollToTop />

      {/* Top Nav */}
      <header className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-5xl flex items-center justify-between gap-4">
          {/* left: brand logo + nav */}
          <div className="flex items-center gap-3">
            <a href="/" className="inline-flex items-center gap-2">
              <img
                src={dark ? "/favicon-dark.svg" : "/favicon-light.svg"}
                alt="YL logo"
                className="h-7 w-7 rounded-lg"
              />
              <span className="hidden sm:inline font-semibold">Paul Liu</span>
            </a>
            <nav className="ml-4 flex items-center gap-4 text-sm">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/resume">Resume</NavItem>
            </nav>
          </div>

          {/* right: theme toggle */}
          <button
            onClick={() => setDark((d) => !d)}
            className="btn btn-outline"
            aria-label="Toggle dark mode"
            title="Toggle theme"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* Routed pages with transitions */}
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/about" element={<Page><AboutMe /></Page>} />
            <Route path="/resume" element={<Page><ResumePage /></Page>} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Yangji (Paul) Liu — All rights reserved.
      </footer>
    </div>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "px-3 py-1.5 rounded-2xl",
          "hover:bg-slate-100 dark:hover:bg-slate-800",
          isActive ? "bg-slate-100 dark:bg-slate-800 font-semibold" : "",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

// --- Pages ---

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">Yangji (Paul) Liu</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mt-2">
          New York University • B.S. Computer & Electrical Engineering
        </p>
        <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mt-6">
          Software & hardware developer exploring computer architecture and systems. Open to NYC-area internships.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a href="mailto:paulliu@nyu.edu" className="btn btn-primary">Email Me</a>
          <a href="https://github.com/YangjiLiu" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          <a href="https://www.linkedin.com/in/yangji-liu-39a976331/" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <article className="card">
          <h3 className="font-semibold">New York University – Tandon School of Engineering</h3>
          <p className="text-slate-700 dark:text-slate-300 mt-1">B.S. in Electrical and Computer Engineering</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm">2024 – 2028 (expected)</p>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm">
            Coursework: Data Structure and Algorithms, OOP in C++, Linear Algebra, Calc I–III, Discrete Math,
            Computer Architecture and Organization, Circuits.
          </p>
        </article>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="card">
            <h3 className="font-semibold">EG1004 Semester-long Design Project</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
              Affiliated with NYU Tandon's EG-UY 1004 Intro to Engineering course. A Building construction with Autodesk Fusion 360, 3D printing, and laser cutting. Proposed and introduced designs to reduce energy consumption and comply with LEED Gold standard while providing spaces for comprehensive uses, including classrooms, dormitories, laboratories, rooftop parks, and study spaces.
            </p>
          </article>
          <article className="card">
            <h3 className="font-semibold">Tsinglan WEService for AP CSA Tutoring</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
              Constructed a website with articles and video tutorials and a forum for discussion dedicated to Java newbies and AP CSA learners. Enrolled in AP with WE Service, and was awarded with WE Service Recognition. 
              <a
                href="https://tsweservice.wordpress.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-brand-600 dark:text-brand-400 ml-1"
              >
                Visit project ↗
              </a>
            </p>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["C++", "Python", "Data Structures", "Computer Architecture", "Linux & Git", "Mac & Windows Environment"].map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutMe() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <section className="md:col-span-2 card">
          <h2 className="font-semibold mb-3">Hi, I’m Paul 👋</h2>
          <p className="text-slate-700 dark:text-slate-300">
            I’m an NYU Tandon undergraduate sophomore pursuing B.S. Electrical and Computer Engineering. My focuses are Object-Oriented Programming, Computer Architecture, and Hardware Systems. I enjoy building
            clean, testable modules and exploring how hardware and software choices impact performance. With the power of AI, I believe hardwares have been stronger than ever before. I’m currently seeking
            NYC-area internships where I can contribute to efficient programs and algorithms, as well as real-world systems, and continue learning.
          </p>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mt-4 space-y-1">
            <li>Languages: C++, Python, Java</li>
            <li>Interests: research, architecture, algorithms</li>
            <li>Values: clarity, reliability, and thoughtful documentation</li>
          </ul>
        </section>

        <aside className="card">
          <h3 className="font-semibold mb-2">Quick Facts</h3>
          <dl className="text-sm space-y-2">
            <div className="flex justify-between"><dt className="text-slate-500 dark:text-slate-400">Based in</dt><dd>New York, NY</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500 dark:text-slate-400">Cumulative GPA</dt><dd>3.35</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500 dark:text-slate-400">Email</dt><dd><a className="underline" href="mailto:paulliu@nyu.edu">paulliu@nyu.edu</a></dd></div>
            <div className="flex justify-between"><dt className="text-slate-500 dark:text-slate-400">GitHub</dt><dd><a className="underline" target="_blank" rel="noreferrer" href="https://github.com/YangjiLiu">/YangjiLiu</a></dd></div>
            <div className="flex justify-between"><dt className="text-slate-500 dark:text-slate-400">LinkedIn</dt><dd><a className="underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yangji-liu-39a976331/">@yangji-liu</a></dd></div>
          </dl>
        </aside>
      </div>
    </main>
  );
}

function ResumePage() {
  // Put your PDF at public/resume.pdf (so it serves at /resume.pdf)
  const resumeUrl = "/resume.pdf";
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>

      <div className="mb-4 flex gap-3">
        <a className="btn btn-primary" href={resumeUrl} download>
          Download Resume
        </a>
        <a className="btn btn-outline" href={resumeUrl} target="_blank" rel="noreferrer">
          Open in New Tab
        </a>
      </div>

      <div className="card p-0 overflow-hidden">
        {/* Inline PDF preview with fallback */}
        <object
          data={resumeUrl}
          type="application/pdf"
          className="w-full"
          style={{ height: "80vh" }}
        >
          <div className="p-6 text-sm text-slate-600 dark:text-slate-300">
            Your browser can’t display the PDF here.{" "}
            <a className="underline" href={resumeUrl} target="_blank" rel="noreferrer">
              Click to open the resume
            </a>
            .
          </div>
        </object>
      </div>
    </main>
  );
}
