"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='sticky top-0 bg-black py-4 flex justify-between items-center z-50 shadow-sm px-4 lg:px-8'>
      <div>
        <Link href={'/'} className='h-font text-xl text-[#76925a]'>
          Huzaifa
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:block'>
        <ul className='flex'>
          <Link 
            href={'/'} 
            className={`me-6 relative group ${pathname === '/' ? 'text-[#76925a]' : 'hover:text-[#76925a]'}`}
          >
            <li className='py-1'>
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#76925a] transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </li>
          </Link>
          <Link 
            href={'/About'} 
            className={`me-6 relative group ${pathname === '/About' ? 'text-[#76925a]' : 'hover:text-[#76925a]'}`}
          >
            <li className='py-1'>
              About
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#76925a] transition-all duration-300 ${pathname === '/About' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </li>
          </Link>
          <Link 
            href={'/Ebooks'} 
            className={`me-6 relative group ${pathname === '/Ebooks' ? 'text-[#A0C878]' : 'hover:text-[#A0C878]'}`}
          >
            <li className='py-1'>
              Ebooks
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#A0C878] transition-all duration-300 ${pathname === '/Blogs' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </li>
          </Link>
          <Link
            href={'/Projects'}
            className={`me-6 relative group ${pathname === '/Projects' ? 'text-[#A0C878]' : 'hover:text-[#A0C878]'}`}
          >
            <li className='py-1'>
              Projects
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#A0C878] transition-all duration-300 ${pathname === '/Projects' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </li>
          </Link>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className='md:hidden text-[#76925a] focus:outline-none'
        onClick={toggleMenu}
        aria-label='Toggle menu'
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full py-4 px-6 z-50'>
          <ul className='flex flex-col space-y-4'>
            <Link 
              href={'/'} 
              className={`relative group ${pathname === '/' ? 'text-[#76925a]' : 'hover:text-[#76925a]'}`}
              onClick={toggleMenu}
            >
              <li className='py-2'>
                Home
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#76925a] transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </li>
            </Link>
            <Link 
              href={'/About'} 
              className={`relative group ${pathname === '/About' ? 'text-[#76925a]' : 'hover:text-[#76925a]'}`}
              onClick={toggleMenu}
            >
              <li className='py-2'>
                About
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#76925a] transition-all duration-300 ${pathname === '/About' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </li>
            </Link>
            <Link 
              href={'/Blogs'} 
              className={`relative group ${pathname === '/Blogs' ? 'text-[#A0C878]' : 'hover:text-[#A0C878]'}`}
              onClick={toggleMenu}
            >
              <li className='py-2'>
                Blogs
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#A0C878] transition-all duration-300 ${pathname === '/Blogs' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </li>
            </Link>
            <Link
            href={'/Projects'}
            className={`relative group ${pathname === '/Projects' ? 'text-[#A0C878]' : 'hover:text-[#A0C878]'}`}
          >
            <li className='py-1'>
              Projects
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#A0C878] transition-all duration-300 ${pathname === '/Projects' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </li>
          </Link>
          </ul>
        </div>
      )}
    </div>
  )
}