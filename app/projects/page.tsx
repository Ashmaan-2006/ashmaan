'use client';

import Link from "next/link";
import PixelSnow from "../components/PixelSnow";

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
    <main className="min-h-screen bg-[#fafafa] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0 z-0 hidden dark:block" aria-hidden="true">
        <PixelSnow
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={200}
          speed={1.25}
          density={0.3}
          direction={125}
          brightness={0.75}
          depthFade={8}
          farPlane={20}
          gamma={0.4545}
          variant="snowflake"
          className="opacity-55"
        />
      </div>

      <Link
        href="/"
        className="fixed left-4 top-4 z-50 rounded-full bg-white/90 dark:bg-zinc-900/90 shadow-md border border-gray-200 dark:border-zinc-700 px-3 py-1 text-sm text-gray-700 dark:text-zinc-300 hover:text-blue-600 hover:border-blue-200 dark:hover:border-blue-500/40 transition-colors"
      >
        ← Back
      </Link>
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 space-y-10">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-zinc-400">Selected work</p>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-gray-600">A few builds I’m proud of. More coming soon.</p>
        </header>

        <div className="divide-y divide-gray-200 dark:divide-zinc-800">
          {projects.map((proj) => (
            <div key={proj.name} className="py-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-lg">{proj.name}</span>
                  <span className="text-sm text-gray-500 dark:text-zinc-400">{proj.tech}</span>
                </div>
                {proj.link && (
                  <Link
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View repo
                  </Link>
                )}
              </div>
              <p className="text-gray-700 dark:text-zinc-300 mt-1">{proj.description}</p>
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-500 dark:text-zinc-400">
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
