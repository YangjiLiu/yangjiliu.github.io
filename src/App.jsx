export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Paul (Yangji) Liu</h1>
        <p className="text-lg text-slate-600 mb-6">
          NYU Tandon • Computer Science & Electrical Engineering Student
        </p>
        <p className="text-slate-700 max-w-2xl mx-auto mb-8">
          OOP-focused C++ developer exploring computer architecture, systems, and robotics. Open to NYC-area internships.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:yangji.liu@example.com"
            className="bg-slate-900 text-white px-6 py-2 rounded-2xl hover:opacity-90"
          >
            Email Me
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-300 px-6 py-2 rounded-2xl hover:shadow-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-300 px-6 py-2 rounded-2xl hover:shadow-sm"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
          <h3 className="font-semibold">New York University – Tandon School of Engineering</h3>
          <p className="text-slate-700 mt-1">B.S. in Computer Science</p>
          <p className="text-slate-500 text-sm">2023 – 2027 (expected)</p>
          <p className="text-slate-600 mt-3 text-sm">
            Coursework: OOP in C++, Linear Algebra, Calc I–III, Discrete Math, Computer Architecture, Circuits.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold">Noble/Warrior OOP Simulator</h3>
            <p className="text-slate-600 mt-2 text-sm">
              Multi-class battle simulator demonstrating composition, inheritance, operator overloading, and copy control.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold">BigUnsigned & Algorithms</h3>
            <p className="text-slate-600 mt-2 text-sm">
              Arbitrary-precision integer with friend vs non-friend operators; recursion utilities.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["C++", "Python", "Data Structures", "Computer Architecture", "Linux & Git", "ROS (learning)", "UE5 + Arduino"].map(
            (s) => (
              <span
                key={s}
                className="text-sm rounded-full border border-slate-300 bg-white px-3 py-1.5 shadow-sm"
              >
                {s}
              </span>
            )
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Paul (Yangji) Liu — All rights reserved.
      </footer>
    </div>
  );
}
