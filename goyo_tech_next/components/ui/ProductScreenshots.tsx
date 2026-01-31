'use client'

import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from './Icons'

// 產品截圖數據 (模擬真實產品界面)
const screenshots = [
  {
    id: 'ai-dashboard',
    title: 'AI 代理管理儀表板',
    description: '統一管理所有AI代理，即時監控效能指標與處理狀態',
    image: '/api/placeholder/800/500',
    category: 'dashboard',
    features: ['即時監控', '效能分析', '代理狀態', '工作流程']
  },
  {
    id: 'knowledge-center',
    title: '企業知識中心',
    description: '智能文件管理系統，自動分類歸檔，快速檢索企業知識資產',
    image: '/api/placeholder/800/500',
    category: 'knowledge',
    features: ['智能歸檔', '全文檢索', '知識圖譜', '版本控制']
  },
  {
    id: 'workflow-automation',
    title: '工作流程自動化',
    description: '視覺化流程設計器，拖拽即可建立複雜的自動化工作流程',
    image: '/api/placeholder/800/500',
    category: 'workflow',
    features: ['視覺化設計', '條件判斷', '多步驟流程', '錯誤處理']
  },
  {
    id: 'integration-hub',
    title: '整合管理中心',
    description: '一鍵連接各種企業系統，管理所有API整合和數據同步',
    image: '/api/placeholder/800/500',
    category: 'integration',
    features: ['API管理', '數據同步', '整合監控', '安全認證']
  },
  {
    id: 'analytics',
    title: '智能分析報告',
    description: '深度業務洞察，AI驅動的數據分析和預測性報告',
    image: '/api/placeholder/800/500',
    category: 'analytics',
    features: ['預測分析', '趨勢洞察', '自動報告', '視覺化圖表']
  }
]

// 灰色佔位截圖組件
function MockScreenshot({ screenshot }: { screenshot: typeof screenshots[0] }) {
  return (
    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden aspect-[16/10] group">
      {/* 灰色佔位圖內容 */}
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <div className="text-center p-8 bg-gray-100 rounded-lg shadow-sm max-w-sm">
          <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span className="text-gray-500 text-3xl">🖥️</span>
          </div>
          <h4 className="text-gray-600 font-medium mb-2">{screenshot.title}</h4>
          <p className="text-gray-500 text-sm mb-4">
            📸 待上傳產品實際截圖
          </p>
          {/* 模擬功能標籤 */}
          <div className="flex flex-wrap gap-2 justify-center">
            {screenshot.features.slice(0, 2).map((feature, index) => (
              <span key={index} className="px-2 py-1 bg-gray-300 text-gray-600 text-xs rounded">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover 效果 */}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
          <PlayIcon className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </div>
  )
}

export default function ProductScreenshots() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // 自動播放邏輯
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % screenshots.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % screenshots.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + screenshots.length) % screenshots.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 標題區域 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#100c1d] mb-4">產品實際畫面</h2>
          <p className="text-lg text-gray-600">
            一覽真實的產品界面，了解如何快速提升您的工作效率
          </p>
        </div>

        {/* 螢幕截圖輪播 */}
        <div className="relative">
          {/* 主要展示區域 */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={screenshot.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* 左側：截圖 */}
                    <div className="order-2 lg:order-1">
                      <MockScreenshot screenshot={screenshot} />
                    </div>

                    {/* 右側：描述 */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6">
                      <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#9980ff]/10 text-[#9980ff] mb-4">
                          功能展示
                        </div>
                        <h3 className="text-2xl font-bold text-[#100c1d] mb-4">
                          {screenshot.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {screenshot.description}
                        </p>
                      </div>

                      {/* 功能特點 */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-[#100c1d] mb-3">主要功能：</h4>
                        {screenshot.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#9980ff] rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* 進度指示器 */}
                      <div className="flex gap-2 pt-4">
                        {screenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === currentSlide
                                ? 'bg-[#9980ff] w-8'
                                : 'bg-gray-300 w-2 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 導覽按鈕 */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* 底部功能說明 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '直覺化操作', description: '無需專業技術知識，點擊即可完成複雜任務' },
            { title: '即時回饋', description: '所有操作結果即時顯示，讓您掌握每個環節' },
            { title: '多平台整合', description: '一個界面管理所有系統，提升工作效率' }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <h4 className="font-semibold text-[#100c1d] mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}