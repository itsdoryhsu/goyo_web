'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ContactModal from './ContactModal'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <>
      <footer className="bg-text-main text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">

          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">

            {/* Left - Company & SBIR */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="果友科技"
                  width={20}
                  height={20}
                  className="rounded-lg"
                />
                <span className="font-bold text-white text-sm md:text-base">果友科技</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary text-sm font-medium hidden md:block">|</div>
                <span className="text-xs text-primary font-bold">SBIR 中央核定創新廠商</span>
              </div>
            </div>

            {/* Center - Contact Info */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm flex-1 md:justify-center w-full md:w-auto">
              <div className="flex items-center gap-2 text-gray-300 justify-center md:justify-start">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-xs md:text-sm text-center md:text-left">台北市大安區忠孝東路4段300號5樓</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 justify-center md:justify-start">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:hr@goyo-tech.com" className="hover:text-primary transition-colors text-xs md:text-sm">
                  hr@goyo-tech.com
                </a>
              </div>
              <button
                onClick={() => setContactModalOpen(true)}
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors justify-center md:justify-start"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                <span className="text-xs md:text-sm">填寫聯繫表單</span>
              </button>
            </div>

            {/* Right - Social Links */}
            <div className="flex items-center gap-3 order-first md:order-last">
              <Link
                href="https://www.linkedin.com/company/goyo-tech"
                target="_blank"
                className="w-7 h-7 md:w-8 md:h-8 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>

              <Link
                href="https://www.104.com.tw/company/1a2x6bnie0?jobsource=google"
                target="_blank"
                className="w-7 h-7 md:w-8 md:h-8 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-xs font-bold">104</span>
              </Link>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-gray-800 pt-3 mt-3 md:mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2 md:gap-0">
              <span className="text-center md:text-left">© {currentYear} 果友科技 Goyo Tech. 版權所有.</span>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-primary transition-colors">隱私政策</Link>
                <Link href="/terms" className="hover:text-primary transition-colors">服務條款</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  )
}