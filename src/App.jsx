import { useEffect, useState } from "react";

export default function App() {
  // Persist dark-mode preference
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Top bar with dark-mode toggle */}
      <header className="px-6 py-4">
        <div className="mx-auto max-w-4xl flex items-center justify-end gap-3">
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

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Yangji (Paul) Liu
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mt-2">
          New York University • B.S. Computer & Electrical Engineering
        </p>
        <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mt-6">
          OOP-focused C++ developer exploring computer architecture and systems. Open to NYC-area internships.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a href="mailto:paulliu@nyu.edu" className="btn btn-primary">
            Email Me
          </a>
          <a
            href="https://github.com/YangjiLiu"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yangji-liu-39a976331/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Education</h2>
        <article className="card">
          <h3 className="font-semibold">New York University – Tandon School of Engineering</h3>
          <p className="text-slate-700 dark:text-slate-300 mt-1">
            B.S. in Electrical and Computer Engineering
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm">2024 – 2028 (expected)</p>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm">
            Coursework: Data Structure and Algorithms, OOP in C++, Linear Algebra, Calc I–III, Discrete Math, Computer Architecture and Organization, Circuits.
          </p>
        </article>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="card">
            <h3 className="font-semibold">Noble/Warrior OOP Simulator</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
              Multi-class battle simulator demonstrating composition, inheritance, operator overloading, and copy control.
            </p>
          </article>
          <article className="card">
            <h3 className="font-semibold">BigUnsigned & Algorithms</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
              Arbitrary-precision integer with friend vs non-friend operators; recursion utilities.
            </p>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["C++", "Python", "Data Structures", "Computer Architecture", "Linux & Git", "UE5 + Arduino"].map(
            (s) => (
              <span key={s} className="chip">
                {s}
              </span>
            )
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Yangji (Paul) Liu — All rights reserved.
      </footer>
    </div>
  );
}
