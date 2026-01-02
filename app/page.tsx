'use client';
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CircularGallery from "../components/CircularGallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  const [showPictures, setShowPictures] = useState(false);
  const [showChat, setShowChat] = useState(false);

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
      />

      <main className="min-h-screen bg-[#FAFAFA] text-black relative">
        <div className="mx-auto w-full max-w-screen-2xl px-2 py-12">
          {showPictures ? (
            <div className="w-full flex justify-center">
              <div style={{ height: "650px", position: "relative", width: "100%" }}>
                <CircularGallery bend={3} textColor="#000000" borderRadius={0.05} scrollEase={0.02} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
              <div className="lg:sticky lg:top-[30px] self-start lg:ml-10">
                <Hero />
              </div>

              <div className="w-full max-w-3xl lg:-mr-16">
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
                    <h2 className="text-xl font-bold mb-4">internships</h2>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>
                          shipped production features at Playtoon - cutting query times saving 1500+ user hours + integrating LLM tooling
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>
                          at <a href="https://www.wisematic.ca/" target="_blank" rel="noopener noreferrer">WiseMatic</a>, built modular Flutter apps + optimized Cubit architecture to reduce latency by ~30%
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2">&gt;</span>
                        <span>
                          led a 4-person engineering team to build scalable scheduling software handling 1k+ concurrent users
                        </span>
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
                              <span className="mr-1 border-b border-gray-300 hover:border-gray-500 cursor-default">promptech</span>
                              <span className="text-sm text-gray-500">- text-to-ecg generation pipeline (pytorch)</span>
                            </div>
                            <ul className="ml-4 mt-1 text-sm">
                              <li className="flex">
                                <span className="mr-2">-</span>
                                <span>exploring diffusion + vq-style tokenization for stable ecg synthesis</span>
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
                                href="https://github.com/VainerAriel/HackThe6ix2025"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-1 border-b border-gray-300 hover:border-gray-500 cursor-default"
                              >
                                pitchperfect
                              </Link>
                              <span className="text-sm text-gray-500">- hack the 6ix auth0 prize, ai roleplay coach</span>
                            </div>
                            <ul className="ml-4 mt-1 text-sm">
                              <li className="flex">
                                <span className="mr-2">-</span>
                                <span>next.js frontend + flask backend + gemini, stored conversations in mongodb</span>
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
                                className="mr-1 border-b border-gray-300 hover:border-gray-500 cursor-default"
                              >
                                vybe
                              </Link>
                              <span className="text-sm text-gray-500">- hack the north - adaptive music from crowd motion</span>
                            </div>
                            <ul className="ml-4 mt-1 text-sm">
                              <li className="flex">
                                <span className="mr-2">-</span>
                                <span>depth-sensor powered playlist system that reacts to audience energy in real-time to drive engagement</span>
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
                                href="https://github.com/ian-yeh/hack-western"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-1 border-b border-gray-300 hover:border-gray-500 cursor-default"
                              >
                                testpilot
                              </Link>
                              <span className="text-sm text-gray-500">- hack western - AI agents for automated frontend UI testing</span>
                            </div>
                            <ul className="ml-4 mt-1 text-sm">
                              <li className="flex">
                                <span className="mr-2">-</span>
                                <span>full-stack app using Playwright, WebSockets, FastAPI, and Gemini to execute UI test flows from a single prompt</span>
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
                                href="https://github.com/Ashmaan-2006/MapleLens"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-1 border-b border-gray-300 hover:border-gray-500 cursor-default"
                              >
                                maplelens
                              </Link>
                              <span className="text-sm text-gray-500">- genAI genesis hackathon - AI product scanner for Canadian alternatives</span>
                            </div>
                            <ul className="ml-4 mt-1 text-sm">
                              <li className="flex">
                                <span className="mr-2">-</span>
                                <span>camera-based product recognition that recommends cheaper Canadian equivalents to promote smarter shopping</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <span className="text-sm text-gray-500 italic block mt-4">
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
                            className="border-b border-gray-300 hover:border-gray-500"
                          >
                            linkedin
                          </a>{" "}
                          or by email
                        </span>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold mb-4">background</h2>
                    <div className="text-sm space-y-2">
                      <div>
                        <span className="mr-2">technical arsenal:</span>
                        <span className="text-gray-500">
                          programming(js/ts, python, java, dart, c/c++), full-stack (next.js, react, node.js), ai/ml (pytorch, tensorflow, opencv), mobile (flutter, android studio), backend (flask, fastapi), cloud/devops (aws, docker, git), databases (postgres + prisma, mongodb), design (figma, html/css, inkscape)
                        </span>
                      </div>
                      <div>
                        <span className="mr-2">interests:</span>
                        <span className="text-gray-500">
                          hackathons (5+ and counting), human-centered ai (tech research w/ aiim labs), entrepreneurship (mnafs: $6k+ mrr), clean transportation (hyperloop routing models paper), basketball (intramural team captain, high school varsity)
                        </span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
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

        <div className="mt-16">
          <Navbar
            onTogglePictures={setShowPictures}
            picturesActive={showPictures}
            onToggleChat={setShowChat}
            chatActive={showChat}
          />
        </div>
      </main>
    </>
  );
}
