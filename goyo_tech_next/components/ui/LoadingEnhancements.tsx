'use client'

import { useEffect, useState } from 'react'

// 載入進度條組件
export function LoadingProgressBar() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleStart = () => {
      setIsVisible(true)
      setProgress(10)
    }

    const handleProgress = () => {
      setProgress(prev => Math.min(prev + Math.random() * 30, 90))
    }

    const handleComplete = () => {
      setProgress(100)
      setTimeout(() => {
        setIsVisible(false)
        setProgress(0)
      }, 200)
    }

    // 模擬路由事件 (在實際Next.js應用中會使用router events)
    window.addEventListener('load-start', handleStart as any)
    window.addEventListener('load-progress', handleProgress as any)
    window.addEventListener('load-complete', handleComplete as any)

    return () => {
      window.removeEventListener('load-start', handleStart as any)
      window.removeEventListener('load-progress', handleProgress as any)
      window.removeEventListener('load-complete', handleComplete as any)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-gradient-to-r from-[#9980ff] to-[#7a66cc] transition-all duration-300 ease-out"
           style={{ width: `${progress}%` }}>
        <div className="h-full bg-white/30 animate-pulse"></div>
      </div>
    </div>
  )
}

// 載入骨架組件
interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave'
}

export function Skeleton({
  className = '',
  variant = 'text',
  width,
  height,
  animation = 'pulse'
}: SkeletonProps) {
  const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:400%_100%]'

  const variantClasses = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  }

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-[wave_1.5s_ease-in-out_infinite]'
  }

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
      style={style}
    />
  )
}

// 卡片載入骨架
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="flex-1">
          <Skeleton width="60%" className="mb-2" />
          <Skeleton width="40%" />
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton width="100%" />
        <Skeleton width="90%" />
        <Skeleton width="70%" />
      </div>
    </div>
  )
}

// 頁面載入指示器
export function PageLoadingIndicator() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* 載入動畫 */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-[#9980ff] border-t-transparent animate-spin"></div>
        </div>

        {/* 載入文字 */}
        <h3 className="text-lg font-semibold text-[#100c1d] mb-2">載入中...</h3>
        <p className="text-gray-600 text-sm">正在為您準備最佳體驗</p>
      </div>
    </div>
  )
}

// 回到頂部按鈕
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-[#9980ff] hover:bg-[#7a66cc] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center group"
      aria-label="回到頂部"
    >
      <svg
        className="w-6 h-6 transform group-hover:translate-y-0.5 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}

// 圖片延遲載入組件
interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
}

export function LazyImage({ src, alt, className = '', placeholder }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 載入狀態 */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-[#9980ff] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* 錯誤狀態 */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-gray-500">?</span>
            </div>
            <p className="text-sm text-gray-500">載入失敗</p>
          </div>
        </div>
      )}

      {/* 實際圖片 */}
      <img
        src={placeholder || src}
        alt={alt}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  )
}

// 內容淡入動畫
interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeInOnScroll({ children, delay = 0, duration = 800, className = '' }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!elementRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(elementRef)
    return () => observer.disconnect()
  }, [elementRef, delay])

  return (
    <div
      ref={setElementRef}
      className={`transition-all duration-[${duration}ms] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

// 統一載入增強容器
interface LoadingEnhancementsProviderProps {
  children: React.ReactNode
  showProgressBar?: boolean
  showScrollToTop?: boolean
}

export function LoadingEnhancementsProvider({
  children,
  showProgressBar = true,
  showScrollToTop = true
}: LoadingEnhancementsProviderProps) {
  return (
    <>
      {showProgressBar && <LoadingProgressBar />}
      {children}
      {showScrollToTop && <ScrollToTop />}

      {/* 全域樣式 */}
      <style jsx global>{`
        @keyframes wave {
          0% { background-position: -400% 0; }
          100% { background-position: 400% 0; }
        }

        .animate-wave {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 400% 100%;
          animation: wave 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}