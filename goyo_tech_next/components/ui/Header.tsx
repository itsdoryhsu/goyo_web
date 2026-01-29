'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import ContactModal from './ContactModal'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollPosition / pageHeight) * 100

      setScrolled(scrollPosition > 50)
      setHidden(scrollPercentage > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
    } ${
      scrolled
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg'
        : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
    }`} style={{ top: 0 }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="果友科技"
                width={32}
                height={32}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm bg-primary"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#100c1d] group-hover:text-primary transition-colors duration-300">
              果友科技
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: '首頁', href: '/' },
              // { name: '解決方案', href: '/products' },
              { name: '關於果友', href: '/about' },
              { name: '動態專欄', href: '/blog' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-[#6b7280] hover:text-primary font-medium transition-colors duration-300 group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            variant="primary"
            size="md"
            onClick={() => setContactModalOpen(true)}
          >
            預約諮詢
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span className={`block h-0.5 w-full bg-gray-600 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-gray-600 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-gray-600 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 pb-6' : 'max-h-0'
        }`}>
          <nav className="flex flex-col gap-4 pt-4 border-t border-gray-100">
            {[
              { name: '首頁', href: '/' },
              // { name: '解決方案', href: '/products' },
              { name: '關於我們', href: '/about' },
              { name: '動態專欄', href: '/blog' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 py-2"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => {
                  setContactModalOpen(true)
                  setMobileMenuOpen(false)
                }}
              >
                預約諮詢
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </header>
  )
}