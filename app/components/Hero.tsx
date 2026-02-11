"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export default function Hero() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolvedTheme: Theme = storedTheme === "dark" || (!storedTheme && prefersDark) ? "dark" : "light";

    root.classList.toggle("dark", resolvedTheme === "dark");
    setTheme(resolvedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <section className="text-left">
      <div>
        <div className="mb-6">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-black/70 dark:text-white/70 hover:bg-black/[0.04] dark:hover:bg-white/[0.08] transition-colors"
            aria-label={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mounted && theme === "dark" ? (
              <>
                <Sun className="h-3.5 w-3.5" />
                Light
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5" />
                Dark
              </>
            )}
          </button>
        </div>

        <h1 className="text-4xl leading-[0.95] font-extrabold font-playfair">
          Ashmaan
        </h1>
        <p className="mt-5 text-md font-extrabold font-playfair text-gray-500 dark:text-zinc-400 flex flex-wrap gap-6 transition-colors">
          <span>Engineer.</span>
          <span>Builder.</span>
          <span>Creator.</span>
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Link href="/projects" className="text-sm font-medium underline decoration-dotted underline-offset-4 text-black/85 dark:text-white/85 hover:text-black dark:hover:text-white transition-colors">
            Selected work
          </Link>
          <a href="#about" className="text-sm font-medium underline decoration-dotted underline-offset-4 text-black/85 dark:text-white/85 hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium underline decoration-dotted underline-offset-4 text-black/85 dark:text-white/85 hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </section>
  );
}
