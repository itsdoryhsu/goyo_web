'use client'

import { useState, useEffect } from 'react'

interface CarouselProps {
  children: React.ReactNode[]
  title: string
}

export default function Carousel({ children, title }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) setCardsToShow(3)
      else if (window.innerWidth >= 768) setCardsToShow(2)
      else setCardsToShow(1)
    }

    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  const totalCards = children.length
  const maxIndex = Math.max(0, totalCards - cardsToShow)

  // Hover-triggered gentle auto-scroll
  useEffect(() => {
    if (!isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 5000) // 5 seconds interval (slower and more gentle)

    return () => clearInterval(interval)
  }, [isHovered, cardsToShow, totalCards, maxIndex])

  const nextSlide = () => {
    setCurrentIndex(Math.min(currentIndex + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0))
  }

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold text-[#100c1d]">{title}</h3>
          {/* Auto-play indicator */}
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
            <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-gray-300' : 'bg-green-400 animate-pulse'}`}></div>
            <span>{isHovered ? '已暫停' : '自動播放'}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Progress indicators */}
          <div className="hidden md:flex gap-1">
            {Array.from({ length: totalCards - cardsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors bg-white disabled:opacity-50 shadow-sm"
              disabled={currentIndex === 0}
            >
              <span className="text-sm">‹</span>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-50 shadow-primary"
              disabled={currentIndex === maxIndex}
            >
              <span className="text-sm">›</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            width: `${(totalCards / cardsToShow) * 100}%`
          }}
        >
          {children.map((child, index) => (
            <div key={index} className="min-w-0 flex-shrink-0" style={{ width: `${100 / totalCards}%` }}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}