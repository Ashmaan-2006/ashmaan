"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export default function Hero() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  const applyTheme = (nextTheme: Theme) => {
    const isDark = nextTheme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.body.classList.toggle("dark", isDark);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolvedTheme: Theme = storedTheme === "dark" || (!storedTheme && prefersDark) ? "dark" : "light";

    applyTheme(resolvedTheme);
    setTheme(resolvedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <section className="text-left">
      <div>
        <div>
          <button
            type="button"
            onClick={toggleTheme}
            className="fixed right-4 top-4 z-50 inline-flex items-center gap-1.5 rounded-full border border-black/8 dark:border-white/12 bg-black/[0.015] dark:bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium tracking-wide text-black/55 dark:text-white/60 hover:text-black/70 dark:hover:text-white/75 hover:bg-black/[0.03] dark:hover:bg-white/[0.06] transition-colors duration-200 sm:right-6 sm:top-6"
            aria-label={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mounted && theme === "dark" ? (
              <>
                <Sun className="h-3 w-3" />
                Light
              </>
            ) : (
              <>
                <Moon className="h-3 w-3" />
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
