'use client'

import { useEffect } from 'react'
import TrialSignupForm from './TrialSignupForm'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[9999] overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="min-h-screen flex items-start sm:items-center justify-center p-4 sm:p-6">
        <div className="bg-transparent max-w-md w-full relative my-8 sm:my-0">
          {/* Form Component with integrated close button */}
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-50 shadow-md"
            >
              <span className="text-gray-600 text-sm">✕</span>
            </button>

            <TrialSignupForm
              onSubmit={(data) => {
                console.log('Form submitted:', data);
                // Keep modal open until user manually closes or form shows success
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}