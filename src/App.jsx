import { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "./content.js";

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

// Scroll to top on route change
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
              <span className="hidden sm:inline font-semibold">{site.brand}</span>
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
        © {new Date().getFullYear()} {site.name} — All rights reserved.
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
        {/* Profile photo */}
        {site.avatar && (
          <img
            src={site.avatar}
            srcSet="/avatar@2x.jpg 2x"
            alt={`${site.name} headshot`}
            width="160"
            height="160"
            fetchpriority="high"
            className="mx-auto mb-4 h-40 w-40 rounded-full object-cover shadow-md ring-2 ring-slate-300 dark:ring-slate-700"
          />
        )}

        <h1 className="text-5xl font-extrabold tracking-tight">{site.name}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mt-2">
          {site.tagline}
        </p>
        <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mt-6">
          {site.summary}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a href={`mailto:${site.email}`} className="btn btn-primary">Email Me</a>
          <a href={site.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <article className="card">
          <h3 className="font-semibold">{site.education.school}</h3>
          <p className="text-slate-700 dark:text-slate-300 mt-1">{site.education.degree}</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{site.education.years}</p>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm">
            {site.education.coursework}
          </p>
        </article>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {site.projects.map((p, i) => (
            <article key={i} className="card">
              <h3 className="font-semibold">
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-2 underline-offset-4 hover:opacity-90"
                  >
                    {p.title} ↗
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                {p.description}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-brand-600 dark:text-brand-400 ml-1"
                  >
                  </a>
                )}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {site.skills.map((s) => (
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
          <div className="flex items-center gap-4 mb-4">
            {site.avatar && (
              <img
                src={site.avatar}
                srcSet="/avatar@2x.jpg 2x"
                alt={`${site.name} headshot`}
                width="96"
                height="96"
                className="h-24 w-24 rounded-2xl object-cover shadow-md ring-2 ring-slate-300 dark:ring-slate-700"
                loading="lazy"
              />
            )}
            <div>
              <h2 className="font-semibold">{site.about.introTitle}</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{site.location}</p>
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-300">{site.about.intro}</p>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mt-4 space-y-1">
            <li>{site.about.languages}</li>
            <li>{site.about.interests}</li>
            <li>{site.about.values}</li>
          </ul>
        </section>

        <aside className="card">
          <h3 className="font-semibold mb-2">Quick Facts</h3>
          <dl className="text-sm space-y-2">
            <div className="flex justify-between"><dt className="text-slate-500 dark:text-slate-400">Based in</dt><dd>{site.location}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500 dark:text-slate-400">Cumulative GPA</dt><dd>{site.gpa}</dd></div>
            <div className="flex justify-between"><dt className="text-slate-500 dark:text-slate-400">Email</dt><dd><a className="underline" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            <div className="flex justify-between"><dt className="text-slate-500 dark:text-slate-400">GitHub</dt><dd><a className="underline" target="_blank" rel="noreferrer" href={site.github}>/YangjiLiu</a></dd></div>
            <div className="flex justify-between"><dt className="text-slate-500 dark:text-slate-400">LinkedIn</dt><dd><a className="underline" target="_blank" rel="noreferrer" href={site.linkedin}>@yangji-liu</a></dd></div>
          </dl>
        </aside>
      </div>
    </main>
  );
}

function ResumePage() {
  const resumeUrl = site.resumeUrl;
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
