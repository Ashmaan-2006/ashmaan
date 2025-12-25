export default function Hero() {
  return (
    <section className="text-left">
      <div>
        <h1 className="text-4xl leading-[0.95] font-extrabold font-playfair">
          Ashmaan
        </h1>
        <p className="mt-5 text-md font-extrabold font-playfair text-gray-500 flex flex-wrap gap-6">
          <span>Engineer.</span>
          <span>Builder.</span>
          <span>Creator.</span>
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
