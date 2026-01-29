'use client'

import {
  HomeIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  ShieldIcon,
  HeartIcon,
  ClockIcon,
  CodeIcon,
  UserGroupIcon,
  StarIcon,
  LockIcon
} from './Icons'
import { useState, useEffect } from 'react'

interface Benefit {
  title: string
  description: string
  icon: React.ReactNode
}

const benefits: Benefit[] = [
  {
    title: '混合辦公',
    description: '靈活的遠端與辦公室混合制度，\n工作採目標達成導向、實踐自主管理',
    icon: <HomeIcon className="w-8 h-8" />
  },
  {
    title: '進修補助',
    description: '證照考取及專業課程萬元補助，\n持續提升專業技能',
    icon: <AcademicCapIcon className="w-8 h-8" />
  },
  {
    title: '健康檢查',
    description: '定期健康檢查與體檢假，\n深信維持健康最重要',
    icon: <HeartIcon className="w-8 h-8" />
  },
  {
    title: '勞健保',
    description: '依法提供勞保、健保及勞退提撥，\n給予最紮實的生活後盾',
    icon: <LockIcon className="w-8 h-8" />
  },
  {
    title: '分紅制度',
    description: '與公司共同分享成長的果實，\n年中績效分紅，保證年終獎金',
    icon: <CurrencyDollarIcon className="w-8 h-8" />
  },
  {
    title: '優質給假制度',
    description: '優於勞基法的給假制度，\n額外提供5天全薪病假、新人假',
    icon: <ClockIcon className="w-8 h-8" />
  },
  {
    title: '技術開發支援',
    description: '公司補助訂閱 Claude Code，\n提供最新開發工具支援',
    icon: <CodeIcon className="w-8 h-8" />
  },
  {
    title: '生活工作並重',
    description: '我們重視效率而非時數，不鼓勵加班，\n讓生活與工作互不干擾',
    icon: <StarIcon className="w-8 h-8" />
  }
]

export default function BenefitsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // 檢測是否為手機版
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const itemsPerPage = isMobile ? 1 : 4
  const totalPages = Math.ceil(benefits.length / itemsPerPage)

  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= totalPages ? 0 : prevIndex + 1
      )
    }, isMobile ? 5000 : 8000) // 手機版5秒，桌面版8秒

    return () => clearInterval(timer)
  }, [totalPages, isMobile])

  return (
    <section className="py-24 bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">福利制度與文化</h2>
          <p className="text-gray-400 text-sm md:text-base px-4">我們期待營造一個可以與員工一起進度成長，充滿支持與具備效率當責的工作環境</p>
        </div>

        <div className="relative overflow-hidden mx-auto max-w-6xl">
          {/* 輪播容器 */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex-shrink-0 text-center p-6 md:p-4 bg-gray-800/50 rounded-2xl hover:bg-gray-800 transition-colors ${
                  isMobile ? 'mx-8' : 'mx-2'
                }`}
                style={{
                  width: isMobile ? 'calc(100% - 64px)' : 'calc(25% - 16px)'
                }}
              >
                <div className="w-16 h-16 md:w-16 md:h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-bold mb-3 text-lg md:text-base">{benefit.title}</h3>
                <p className="text-gray-400 text-base md:text-sm whitespace-pre-line leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 頁面指示器 */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 md:w-3 md:h-3 rounded-full transition-colors ${
                currentIndex === index
                  ? 'bg-primary'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}