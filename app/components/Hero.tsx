import React from "react";

export default function Hero() {
  return (
    <section className="hero py-20 lg:py-32">
      <div className="container max-w-5xl mx-auto px-4 flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-primary typing-effect" id="nameTyping">Ashmaan</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground">
          A passionate developer building <span className="text-primary typing-effect" id="workTyping">amazing digital experiences</span>
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
          <a href="#projects" className="btn btn-outline">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
