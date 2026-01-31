'use client'

import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from './Icons'

// 統一的產品展示數據 - 包含流程和功能兩種模式
const showcaseData = {
  process: [
    {
      id: 'role-definition',
      title: '定義角色',
      description: '賦予 AI 助理專業背景與目標，設定服務範圍和專業領域',
      category: '設定階段',
      features: ['角色設定', '專業背景', '服務範圍', '互動風格'],
      mockInterface: 'role-setup'
    },
    {
      id: 'knowledge-upload',
      title: '匯入知識庫',
      description: '拖拽文件即可完成數據餵養，支援多種格式自動解析',
      category: '資料階段',
      features: ['文件上傳', '自動解析', '知識提取', '資料整理'],
      mockInterface: 'knowledge-import'
    },
    {
      id: 'assistant-preparation',
      title: '助理準備',
      description: '整理資料並準備上線，系統自動優化回應品質',
      category: '準備階段',
      features: ['資料整理', '模型訓練', '品質優化', '測試驗證'],
      mockInterface: 'assistant-prep'
    },
    {
      id: 'service-connection',
      title: '連接服務',
      description: '整合到各種客服平台，一鍵部署到生產環境',
      category: '部署階段',
      features: ['平台整合', '一鍵部署', 'API連接', '安全設定'],
      mockInterface: 'service-connect'
    },
    {
      id: 'live-demo',
      title: '客服實況',
      description: '真實預約對話展示，展現AI助理的實際服務能力',
      category: '運行階段',
      features: ['實時對話', '智能回應', '問題解決', '滿意度追蹤'],
      mockInterface: 'live-chat'
    }
  ],
  features: [
    {
      id: 'ai-dashboard',
      title: 'AI 代理管理儀表板',
      description: '統一管理所有AI代理，即時監控效能指標與處理狀態',
      category: '管理控制台',
      features: ['即時監控', '效能分析', '代理狀態', '工作流程'],
      mockInterface: 'dashboard'
    },
    {
      id: 'knowledge-center',
      title: '企業知識中心',
      description: '智能文件管理系統，自動分類歸檔，快速檢索企業知識資產',
      category: '知識管理',
      features: ['智能歸檔', '全文檢索', '知識圖譜', '版本控制'],
      mockInterface: 'knowledge'
    },
    {
      id: 'workflow-automation',
      title: '工作流程自動化',
      description: '視覺化流程設計器，拖拽即可建立複雜的自動化工作流程',
      category: '自動化工具',
      features: ['視覺化設計', '條件判斷', '多步驟流程', '錯誤處理'],
      mockInterface: 'workflow'
    },
    {
      id: 'integration-hub',
      title: '整合管理中心',
      description: '一鍵連接各種企業系統，管理所有API整合和數據同步',
      category: '系統整合',
      features: ['API管理', '數據同步', '整合監控', '安全認證'],
      mockInterface: 'integration'
    },
    {
      id: 'analytics',
      title: '智能分析報告',
      description: '深度業務洞察，AI驅動的數據分析和預測性報告',
      category: '數據分析',
      features: ['預測分析', '趨勢洞察', '自動報告', '視覺化圖表'],
      mockInterface: 'analytics'
    }
  ]
}

// 灰色佔位圖組件
function MockInterface({ item }: { item: typeof showcaseData.process[0] }) {
  return (
    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden aspect-[16/10] group">
      {/* 灰色佔位圖內容 */}
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <div className="text-center p-8 bg-gray-100 rounded-lg shadow-sm max-w-xs">
          <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span className="text-gray-500 text-2xl">📱</span>
          </div>
          <h4 className="text-gray-600 font-medium mb-2">{item.title}</h4>
          <p className="text-gray-500 text-sm">
            📷 待上傳產品截圖
          </p>
          <div className="mt-4 space-y-2">
            <div className="h-2 bg-gray-300 rounded w-full"></div>
            <div className="h-2 bg-gray-300 rounded w-3/4 mx-auto"></div>
            <div className="h-2 bg-gray-300 rounded w-1/2 mx-auto"></div>
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

export default function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<'process' | 'features'>('process')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const currentData = showcaseData[activeTab]

  // 自動播放邏輯
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % currentData.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying, currentData.length, activeTab])

  // 切換標籤時重置索引
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeTab])

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % currentData.length)
    setIsAutoPlaying(false)
  }

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + currentData.length) % currentData.length)
    setIsAutoPlaying(false)
  }

  const handleTabChange = (tab: 'process' | 'features') => {
    setActiveTab(tab)
    setIsAutoPlaying(true)
  }

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 標題區域 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#100c1d] mb-4">
            產品體驗展示
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            從設定流程到功能運用，全面了解 Goyo AI 如何為您的企業帶來價值
          </p>
        </div>

        {/* 標籤導航 */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => handleTabChange('process')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'process'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-600 hover:text-primary hover:bg-white'
              }`}
            >
              使用流程
            </button>
            <button
              onClick={() => handleTabChange('features')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'features'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-600 hover:text-primary hover:bg-white'
              }`}
            >
              產品功能
            </button>
          </div>
        </div>

        {/* 主要展示區域 */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* 左側：模擬界面 */}
              <div className="order-2 lg:order-1">
                <MockInterface item={currentData[currentIndex]} />
              </div>

              {/* 右側：詳細資訊 */}
              <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                    {currentData[currentIndex].category}
                  </div>
                  <h3 className="text-2xl font-bold text-[#100c1d] mb-4">
                    {currentData[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {currentData[currentIndex].description}
                  </p>
                </div>

                {/* 功能特點 */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#100c1d] mb-3">
                    {activeTab === 'process' ? '關鍵步驟：' : '主要功能：'}
                  </h4>
                  {currentData[currentIndex].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* 控制按鈕 */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex gap-2">
                    {currentData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index)
                          setIsAutoPlaying(false)
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'bg-primary w-8'
                            : 'bg-gray-300 w-2 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {isAutoPlaying ? (
                      <PauseIcon className="w-4 h-4 text-gray-600" />
                    ) : (
                      <PlayIcon className="w-4 h-4 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 導覽按鈕 */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* 底部說明 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold text-[#100c1d] mb-2">直覺操作</h4>
            <p className="text-gray-600 text-sm">無需專業技術知識，點擊即可完成複雜設定</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold text-[#100c1d] mb-2">即時回饋</h4>
            <p className="text-gray-600 text-sm">所有操作結果即時顯示，讓您掌握每個環節</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold text-[#100c1d] mb-2">全面整合</h4>
            <p className="text-gray-600 text-sm">一個平台管理所有功能，提升工作效率</p>
          </div>
        </div>
      </div>
    </section>
  )
}