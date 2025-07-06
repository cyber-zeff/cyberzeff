"use client"
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
            <h3 className="h-font text-[#76925a] text-3xl md:text-4xl">cyberzeff</h3>
            <h5 className="text-lg md:text-xl mt-2">aka Muhammad Huzaifa</h5>
            <h1 className="primary-font text-3xl md:text-4xl py-3 md:py-4">Developer & Consultant</h1>
            <p className="text-base md:text-lg max-w-md mx-auto md:mx-0">
              I'm a full-stack developer and cybersecurity specialist building secure digital solutions that withstand modern threats.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href={'/Projects'} className="bg-[#76925a] hover:bg-[#5a7245] text-white font-bold py-2 px-6 rounded-full transition-all">
                View Projects
              </Link>
              <Link href={'/About#Contact'} className="border-2 border-[#76925a] text-[#76925a] hover:bg-[#76925a]/10 hover:shadow-md hover:scale-105 font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out">
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
            <h2 className="font-sans font-semibold text-2xl md:text-3xl text-center mb-3">Featured Projects</h2>
            <div className="h-line mx-auto w-20 h-0.5 bg-[#76925a] mb-8"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Project Card 1 */}
              <div className="max-w-full border border-gray-200 rounded-lg shadow-sm bg-black dark:border-gray-700 transition-transform hover:scale-[1.02]">
                <Link href="#">
                  <Image
                    width={400}
                    height={300}
                    className="rounded-t-lg w-full h-auto object-cover"
                    src="/img.jpg"
                    alt="Project Image"
                  />
                </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Secure Banking Portal</h5>
                  </Link>
                  <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-300">
                    React-based banking application with end-to-end encryption and biometric authentication.
                  </p>
                  <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#76925a] rounded-lg hover:bg-[#5a7245] transition-colors">
                    View Project
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="max-w-full border border-gray-200 rounded-lg shadow-sm bg-black dark:border-gray-700 transition-transform hover:scale-[1.02]">
                <Link href="#">
                  <Image
                    width={400}
                    height={300}
                    className="rounded-t-lg w-full h-auto object-cover"
                    src="/img.jpg"
                    alt="Project Image"
                  />
                </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">E-Commerce Platform</h5>
                  </Link>
                  <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-300">
                    Full-stack e-commerce solution with payment integration and inventory management.
                  </p>
                  <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#76925a] rounded-lg hover:bg-[#5a7245] transition-colors">
                    View Project
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="max-w-full border border-gray-200 rounded-lg shadow-sm bg-black dark:border-gray-700 transition-transform hover:scale-[1.02]">
                <Link href="#">
                  <Image
                    width={400}
                    height={300}
                    className="rounded-t-lg w-full h-auto object-cover"
                    src="/img.jpg"
                    alt="Project Image"
                  />
                </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Security Dashboard</h5>
                  </Link>
                  <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-300">
                    Real-time network monitoring tool with threat detection and alert system.
                  </p>
                  <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#76925a] rounded-lg hover:bg-[#5a7245] transition-colors">
                    View Project
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
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
            <h2 className="text-3xl md:text-4xl font-bold h-font">Wanna Chat?</h2>
            <p className="text-base md:text-lg text-white/90">
              Let's build something secure together — whether you need a custom web solution
              or want to harden your existing systems against attacks.
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
  )
}
