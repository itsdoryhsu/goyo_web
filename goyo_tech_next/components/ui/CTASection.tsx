'use client'

import { useState } from 'react'
import Button from './Button'
import ContactModal from './ContactModal'

export default function CTASection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#130f23] px-6 py-16 text-center shadow-2xl sm:px-16">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-[#9980ff]/30 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-[#9980ff]/20 blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                準備好變革您的工作流程了嗎？
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
                立即預約免費諮詢，讓我們深度瞭解您的需求，評估合適解決方案。
              </p>

              <div className="mt-10 flex justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  預約諮詢
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}