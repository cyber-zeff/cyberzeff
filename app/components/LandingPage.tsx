"use client";
import Image from "next/image";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div>
        {/* Showcase */}
        <section className="px-4 lg:px-16 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h3 className="h-font text-[#76925a] text-3xl md:text-4xl">
              cyberzeff
            </h3>
            <h5 className="text-lg md:text-xl mt-2">aka Muhammad Huzaifa</h5>
            <h1 className="primary-font text-3xl md:text-4xl py-3 md:py-4">
              Developer & Consultant
            </h1>
            <p className="text-base md:text-lg max-w-md mx-auto md:mx-0">
              I'm a full-stack developer and cybersecurity specialist building
              secure digital solutions that withstand modern threats.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href={"/Projects"}
                className="bg-[#76925a] hover:bg-[#5a7245] text-white font-bold py-2 px-6 rounded-full transition-all"
              >
                View Projects
              </Link>
              <Link
                href={"/About#Contact"}
                className="border-2 border-[#76925a] text-[#76925a] hover:bg-[#76925a]/10 hover:shadow-md hover:scale-105 font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 mx-auto w-full max-w-xs md:max-w-md">
            <Image
              src="/showcase.svg"
              width={400}
              height={400}
              alt="Showcase Section Image"
              className="w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* Featured Projects */}
        <section className="px-4 lg:px-16 py-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-sans font-semibold text-2xl md:text-3xl text-center mb-3">
              Featured Projects
            </h2>
            <div className="h-line mx-auto w-20 h-0.5 bg-[#76925a] mb-8"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Project Card 1 */}
              <div className="max-w-full border border-gray-200 rounded-lg shadow-sm bg-black dark:border-gray-700 transition-transform hover:scale-[1.02]">
                <div className="p-5">
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    AURA AI
                  </h5>
                  <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-300">
                    An AI educator chatbot for Students of O'levels and A'levels
                    (subj: Phy, Chem, Maths).
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                      Python
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                      Uvicorn
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                      AI
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                      Agentic AI
                    </span>
                  </div>

                  <Link
                    href="https://github.com/cyber-zeff/AURA-AI-Chatbot"
                    target="_blank"
                    className="inline-flex items-center text-[#76925a] hover:underline text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4 text-[#76925a] dark:text-[#76925a]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                      />
                    </svg>
                    Code
                  </Link>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="max-w-full border border-gray-200 rounded-lg shadow-sm bg-black dark:border-gray-700 transition-transform hover:scale-[1.02]">
                <div className="p-5">
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Password Strength Meter
                  </h5>
                  <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-300">
                    A basic tool that rates password strength based on hacking
                    difficulty.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                      Python
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                      Streamlit
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                      Security
                    </span>
                  </div>

                  <Link
                    target="_blank"
                    href="https://github.com/cyber-zeff/Python-Class-Projects/tree/main/2_Password_Strength_Meter"
                    className="me-3 inline-flex items-center text-[#76925a] hover:underline text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4 text-[#76925a] dark:text-[#76925a]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                      />
                    </svg>
                    Code
                  </Link>
                  <Link
                    target="_blank"
                    href="https://hux-password-strength-meter.streamlit.app/"
                    className="inline-flex items-center text-[#76925a] hover:underline text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4 text-[#76925a] dark:text-[#76925a]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                      />
                    </svg>
                    Demo
                  </Link>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="max-w-full border border-gray-200 rounded-lg shadow-sm bg-black dark:border-gray-700 transition-transform hover:scale-[1.02]">
                <div className="p-5">
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Vehiclez
                  </h5>
                  <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-300">
                    A vehicles website made for a client as a business website.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                      PHP
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                      Bootstrap
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                      Ajax
                    </span>
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                      MySQL
                    </span>
                  </div>

                  <Link
                    target="_blank"
                    href="https://github.com/cyber-zeff/Vehicle-Website-Vehiclez-"
                    className="inline-flex items-center text-[#76925a] hover:underline text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4 text-[#76925a] dark:text-[#76925a]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                      />
                    </svg>
                    Code
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/Projects"
                className="inline-block border-2 border-[#76925a] text-[#76925a] bg-transparent hover:bg-[#76925a]/10 hover:shadow-md hover:scale-105 font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Contact me */}
        <section className="mx-3 my-10 bg-[#76925a] rounded-2xl px-6 py-12 text-white shadow-lg md:mx-auto md:max-w-4xl lg:max-w-5xl">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold h-font">
              Wanna Chat?
            </h2>
            <p className="text-base md:text-lg text-white/90">
              Let's build something secure together — whether you need a custom
              web solution or want to harden your existing systems against
              attacks.
            </p>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
            <Link
              href="/About"
              className="inline-block bg-white text-[#76925a] font-semibold px-6 py-3 rounded-full border-2 border-white hover:bg-white/90 hover:scale-105 transition-all duration-300"
            >
              About Me
            </Link>

            <Link
              href="/About#Contact"
              className="inline-block bg-transparent text-white font-semibold px-6 py-3 rounded-full border-2 border-white hover:bg-white hover:text-[#76925a] hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
