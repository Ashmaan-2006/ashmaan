import React from "react";

export default function Hero() {
  return (
    <section className="hero min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-6xl sm:text-[96px] leading-[0.9] font-extrabold font-playfair">
          Ashmaan
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
          Creative developer building thoughtful digital products and experiences.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a href="#projects" className="text-sm font-medium underline decoration-dotted underline-offset-4">Selected work</a>
          <a href="#about" className="text-sm font-medium">About</a>
          <a href="#contact" className="text-sm font-medium">Contact</a>
        </div>
      </div>
    </section>
  );
}
