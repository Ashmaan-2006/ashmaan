'use client';
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CircularGallery from "../components/CircularGallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PixelSnow from "./components/PixelSnow";

export default function Home() {
  const [showPictures, setShowPictures] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const homeActive = !showPictures && !showChat;

  return (
    <>
      <Navbar
        onTogglePictures={(val) => {
          setShowPictures(val);
          if (val) setShowChat(false);
        }}
        picturesActive={showPictures}
        onToggleChat={(val) => {
          setShowChat(val);
          if (val) setShowPictures(false);
        }}
        chatActive={showChat}
        homeActive={homeActive}
        onToggleHome={() => {
          setShowPictures(false);
          setShowChat(false);
        }}
      />

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

        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-2 py-12">
          {showPictures ? (
            <div className="w-full flex justify-center">
              <div style={{ height: "650px", position: "relative", width: "100%" }}>
                <CircularGallery bend={3} textColor="#000000" borderRadius={0.05} scrollEase={0.02} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-[300px_minmax(0,1fr)] dark:lg:grid-cols-[300px_minmax(0,1fr)_340px]">
              <div className="lg:sticky lg:top-[30px] self-start lg:ml-10">
                <Hero />
              </div>

              <div className="w-full max-w-3xl">
                <div className="space-y-10">
                  <section>
                    <h2 className="text-xl font-bold mb-4">origins</h2>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>started with websites in high school, then got addicted to shipping real tools people use</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>learned fast through hackathons, design teams, and founder-style roles where execution matters</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>built an e-commerce business doing $6k+ MRR while still in first year</span>
                      </li>
                    </ul>
                  </section>

                  <section id="about">
                    <h2 className="text-xl font-bold mb-4">academics</h2>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>queen's university computer engineering (sci '28), systems + ml focus</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>received $30,000 from queen's for academic excellence and leadership</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>obsessed with learning by doing: algorithms, practical deep learning, and full-stack engineering</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold mb-4">experience</h2>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>incoming software engineer intern at wsp, building internal agents tools for thousands of employees</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>at playtoon, shipped ai-powered production features supporting 1,200 monthly active users</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>at wisematic, automated data pipelines processing 15,000+ records weekly and eliminated 8+ hours of recurring work</span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold mb-4">research</h2>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>published research on benchmarking mllms for forensic science and medicine in ieee access</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>developing generative models that translate clinical text into synthetic ecg signals</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>exploring multimodal learning, agentic systems, and reliable ai evaluation</span>
                      </li>
                    </ul>
                  </section>

                  <section id="projects">
                    <h2 className="text-xl font-bold mb-4">key projects</h2>
                    <ul className="space-y-4">
                      <li>
                        <div className="flex items-start">
                          <span className="flex-shrink-0 mr-2">&gt;</span>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-baseline">
                              <span className="mr-1 border-b border-gray-300 dark:border-zinc-700 hover:border-gray-500 dark:hover:border-zinc-500 cursor-default">clinical graphrag engine</span>
                              <span className="text-sm text-gray-500 dark:text-zinc-400">- searchable patient timelines</span>
                            </div>
                            <ul className="ml-4 mt-1 text-sm">
                              <li className="flex">
                                <span className="mr-2">-</span>
                                <span>transformed 50k+ healthcare records into graph-backed clinical context</span>
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
                              <span className="mr-1 border-b border-gray-300 dark:border-zinc-700 hover:border-gray-500 dark:hover:border-zinc-500 cursor-default">capital markets agent</span>
                              <span className="text-sm text-gray-500 dark:text-zinc-400">- grounded financial analysis pipeline</span>
                            </div>
                            <ul className="ml-4 mt-1 text-sm">
                              <li className="flex">
                                <span className="mr-2">-</span>
                                <span>turns raw market data into grounded, auditable analyst reports</span>
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
                              <Link
                                href="https://github.com/eunsongkoh/vybe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-1 border-b border-gray-300 dark:border-zinc-700 hover:border-gray-500 dark:hover:border-zinc-500 cursor-default"
                              >
                                vybe
                              </Link>
                              <span className="text-sm text-gray-500 dark:text-zinc-400">- real-time crowd intelligence system</span>
                            </div>
                            <ul className="ml-4 mt-1 text-sm">
                              <li className="flex">
                                <span className="mr-2">-</span>
                                <span>measured crowd energy with computer vision at hack the north</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <span className="text-sm text-gray-500 dark:text-zinc-400 italic block mt-4">
                      for more detail, see my
                      <a
                        href="https://drive.google.com/file/d/1i0jPezaeIN_l25Y1faJTkAF4fZ1IgnOW/view?usp=sharing"
                        className="underline ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        resume
                      </a>
                    </span>
                  </section>

                  <section id="contact">
                    <h2 className="text-xl font-bold mb-4">contact</h2>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>
                          reach me on{" "}
                          <a
                            href="https://www.linkedin.com/in/ashmaan-sohail/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-gray-300 dark:border-zinc-700 hover:border-gray-500 dark:hover:border-zinc-500"
                          >
                            linkedin
                          </a>{" "}
                          or by email
                        </span>
                      </li>
                    </ul>
                  </section>

                </div>
              </div>
              <aside className="hidden dark:block self-start">
                <div className="pointer-events-none hidden lg:block fixed right-6 bottom-6 z-20 w-[440px]">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/portfolio-photos/PixelSnowman.png"
                      alt="Dark mode Snowman"
                      width={960}
                      height={1560}
                      className="w-full h-auto object-cover opacity-90"
                      priority
                    />
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>

        {showChat && (
          <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <Image
                src="/InProgress.jpg"
                alt="Chat in progress"
                width={600}
                height={200}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}


      </main>
    </>
  );
}
