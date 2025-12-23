import Chatbot from "./components/Chatbot";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      {/* Your existing floating nav */}
      <nav className="flex fixed top-5 right-8 items-center justify-between px-6 py-4 bg-white/10 shadow-2xl rounded-lg ease-in duration-500 hover:bg-white/80 hover:scale-105 z-50">
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Page */}
      <main className="min-h-screen bg-[#FAFAFA] text-black">
         <div className="mx-auto w-full max-w-screen-2xl px-2 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
            {/* LEFT: Hero pinned top-left */}
            <div className="lg:sticky lg:top-[30px] self-start lg:-ml-2">
              <Hero />
            </div>
          

          {/* RIGHT: Theo content at top-middle */}
            <div className="w-full max-w-3xl lg:-mr-16">
              <div className="space-y-10">
                {/* what i'm up to */}


            {/* origins */}
            <section>
              <h2 className="text-xl font-bold mb-4">origins</h2>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="mr-2">&gt;</span>
                  <span>started with websites, then got addicted to shipping real things</span>
                </li>
                <li className="flex">
                  <span className="mr-2">&gt;</span>
                  <span>
                    learned fast through hackathons, design teams, and building tools that people actually use
                  </span>
                </li>
              </ul>
            </section>

            {/* academics */}
            <section>
              <h2 className="text-xl font-bold mb-4">academics</h2>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="mr-2">&gt;</span>
                  <span>queen&apos;s university — computer engineering (sci &apos;28)</span>
                </li>
                <li className="flex">
                  <span className="mr-2">&gt;</span>
                  <span>
                    focused on systems + ml fundamentals: algorithms, data structures, deep learning, and practical full-stack
                  </span>
                </li>
              </ul>
            </section>

            {/* internships */}
            <section>
              <h2 className="text-xl font-bold mb-4">internships</h2>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="mr-2">&gt;</span>
                  <span>
                    built modular full-stack features (next.js + ts + postgres/prisma) and shipped production work under deadlines
                  </span>
                </li>
              </ul>
            </section>

            {/* key projects */}
            <section id="projects">
              <h2 className="text-xl font-bold mb-4">key projects</h2>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 mr-2">&gt;</span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline">
                        <span className="mr-1 border-b border-gray-300 hover:border-gray-500 cursor-default">
                          promptecg
                        </span>
                        <span className="text-sm text-gray-500">
                          — text-to-ecg generation pipeline (pytorch)
                        </span>
                      </div>
                      <ul className="ml-4 mt-1 text-sm">
                        <li className="flex">
                          <span className="mr-2">◦</span>
                          <span>
                            exploring diffusion + vq-style tokenization for stable ecg synthesis
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 mr-2">&gt;</span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline">
                        <span className="mr-1 border-b border-gray-300 hover:border-gray-500 cursor-default">
                          pitchperfect
                        </span>
                        <span className="text-sm text-gray-500">
                          — hack the 6ix auth0 prize, ai roleplay coach
                        </span>
                      </div>
                      <ul className="ml-4 mt-1 text-sm">
                        <li className="flex">
                          <span className="mr-2">◦</span>
                          <span>
                            next.js frontend + flask backend + gemini, stored conversations in mongodb
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 mr-2">&gt;</span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline">
                        <a
                          href="https://github.com/Ashmaan-2006"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mr-1 border-b border-gray-300 hover:border-gray-500"
                        >
                          github
                        </a>
                        <span className="text-sm text-gray-500">
                          — more projects + code
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <span className="text-sm text-gray-500 italic block mt-4">
                for more detail, see my
                <a
                  href="/assets/resume.pdf"
                  className="underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  resume
                </a>
              </span>
            </section>

            {/* contact */}
            <section id="contact">
              <h2 className="text-xl font-bold mb-4">contact</h2>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="mr-2">&gt;</span>
                  <span>
                    reach me on{" "}
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-gray-300 hover:border-gray-500"
                    >
                      linkedin
                    </a>{" "}
                    or by email
                  </span>
                </li>
              </ul>
            </section>

            {/* background */}
            <section>
              <h2 className="text-xl font-bold mb-4">background</h2>
              <div className="text-sm space-y-2">
                <div>
                  <span className="mr-2">technical arsenal:</span>
                  <span className="text-gray-500">
                    next.js, react, ts/js, python, flutter, postgres (prisma), git, docker, pytorch
                  </span>
                </div>
                <div>
                  <span className="mr-2">interests:</span>
                  <span className="text-gray-500">
                    hackathons, human-centered ai, research, cars, shipping clean products
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
        </div>
        </div>

        {<div className="mt-16">
          <Navbar />
        </div>}
      </main>
    </>
  );
}
