export default function Hero() {
  return (
    <section className="text-left">
      <div>
        <h1 className="text-4xl leading-[0.95] font-extrabold font-playfair">
          Ashmaan
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          Creative developer building thoughtful digital products and experiences.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <a href="#projects" className="text-sm font-medium underline decoration-dotted underline-offset-4">
            Selected work
          </a>
          <a href="#about" className="text-sm font-medium">About</a>
          <a href="#contact" className="text-sm font-medium">Contact</a>
        </div>
      </div>
    </section>
  );
}
