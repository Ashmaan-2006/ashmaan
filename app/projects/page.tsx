'use client';

import Link from "next/link";

const projects = [
  {
    name: "pitchperfect",
    description: "Hack the 6ix Auth0 prize – AI roleplay coach",
    link: "https://github.com/VainerAriel/HackThe6ix2025",
    tech: "Next.js, Flask, Gemini, MongoDB"
  },
  {
    name: "vybe",
    description: "Hack the North – adaptive music from crowd motion",
    link: "https://github.com/eunsongkoh/vybe",
    tech: "Computer vision, real-time audio"
  },
  {
    name: "testpilot",
    description: "Hack Western – AI agents for automated frontend UI testing",
    link: "https://github.com/ian-yeh/hack-western",
    tech: "Playwright, WebSockets, FastAPI, Gemini"
  },
  {
    name: "maplelens",
    description: "GenAI Genesis – AI product scanner for Canadian alternatives",
    link: "https://github.com/Ashmaan-2006/MapleLens",
    tech: "Vision, recommendation"
  },
  {
    name: "promptech",
    description: "Text-to-ECG generation pipeline",
    link: "",
    tech: "Diffusion, VQ tokenization, PyTorch"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-black relative">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 rounded-full bg-white shadow-md border border-gray-200 px-3 py-1 text-sm text-gray-700 hover:text-blue-600 hover:border-blue-200"
      >
        ← Back
      </Link>
      <div className="mx-auto max-w-4xl px-4 py-16 space-y-10">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">Selected work</p>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-gray-600">A few builds I’m proud of. More coming soon.</p>
        </header>

        <div className="divide-y divide-gray-200">
          {projects.map((proj) => (
            <div key={proj.name} className="py-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-lg">{proj.name}</span>
                  <span className="text-sm text-gray-500">{proj.tech}</span>
                </div>
                {proj.link && (
                  <Link
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View repo
                  </Link>
                )}
              </div>
              <p className="text-gray-700 mt-1">{proj.description}</p>
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-500">
          Want details?{" "}
          <Link
            href="https://drive.google.com/file/d/1i0jPezaeIN_l25Y1faJTkAF4fZ1IgnOW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Download the resume
          </Link>.
        </div>
      </div>
    </main>
  );
}
