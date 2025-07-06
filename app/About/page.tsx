import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactSection from './Contact';

export default function page() {
  return (
    <>
      <Navbar />

      <div className='px-4 lg:px-16 mt-16'>
        <h2 className='h-font text-5xl text-[#76925a] text-center'>Hi!</h2>

        <p className='mt-8 text-center'>
          I am Muhammad Huzaifa — a web developer, cybersecurity student, AI chatbot enthusiast, animator, bookworm, and cinephile.
          <br /><br />
          My journey began with self-learning and grew through hands-on projects, online courses, and real client work. Over time, I have explored a wide range of technologies — from PHP to TypeScript — and gradually shifted my focus toward building secure and scalable systems.
        </p>
        <div className="mt-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Current toolkit favorites:</h3>
          <div className="flex flex-wrap gap-3">
            {['TypeScript', 'Next.js', 'C++', 'Python', 'Tailwind CSS', 'Node.js'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-[#76925a]/10 text-[#76925a] rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ContactSection/ >
      
      <Footer />
    </>
  )
}
