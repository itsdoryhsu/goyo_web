'use client'

import { useState } from 'react'
import { PlayIcon, PauseIcon } from './Icons'

// 演示步驟資料
const demoSteps = [
  {
    id: 1,
    title: '定義角色',
    description: '賦予 Agent 專業背景與目標',
    content: 'role-definition'
  },
  {
    id: 2,
    title: '匯入知識庫',
    description: '拖拉文件即可完成數據餵養',
    content: 'knowledge-upload'
  },
  {
    id: 3,
    title: '助理準備',
    description: '整理資料並準備上線',
    content: 'assistant-preparation'
  },
  {
    id: 4,
    title: '連接服務',
    description: '整合到客服平台',
    content: 'service-connection'
  },
  {
    id: 5,
    title: '客服實況',
    description: '真實預約對話展示',
    content: 'live-demo'
  }
]

interface DemoStepProps {
  step: typeof demoSteps[0]
  isActive: boolean
  onClick: () => void
}

function DemoStep({ step, isActive, onClick }: DemoStepProps) {
  return (
    <div
      className={`cursor-pointer p-4 rounded-xl border transition-all ${
        isActive
          ? 'border-primary/50 bg-primary/5'
          : 'border-gray-200 hover:border-primary/50'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          isActive
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-gray-600'
        }`}>
          {step.id}
        </div>
        <h4 className="font-semibold text-[#100c1d]">{step.title}</h4>
      </div>
      <p className="text-sm text-gray-600">{step.description}</p>
    </div>
  )
}

export default function ProductDemoSection() {
  const [activeStep, setActiveStep] = useState(1)
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] bg-gradient-to-b from-pink-200/40 via-primary/5 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-[#100c1d]">
            在數秒內啟用 <span className="gradient-text">Agents</span>，加速 AI 自動化流程
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            上傳檔案立即訓練您的臨時代理。無需程式碼。純粹的 AI 效率。
          </p>
        </div>

        {/* Split View Demo */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[400px,1fr] gap-8 items-start">
            {/* Left Navigation */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#100c1d]">產品演示</h3>
                <button
                  onClick={togglePlayPause}
                  className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  {isPlaying ? (
                    <PauseIcon className="w-5 h-5 text-primary" />
                  ) : (
                    <PlayIcon className="w-5 h-5 text-primary" />
                  )}
                </button>
              </div>

              {/* Steps List */}
              <div className="space-y-4">
                {demoSteps.map((step) => (
                  <DemoStep
                    key={step.id}
                    step={step}
                    isActive={activeStep === step.id}
                    onClick={() => setActiveStep(step.id)}
                  />
                ))}
              </div>
            </div>

            {/* Right Simulator */}
            <div className="bg-white rounded-2xl p-1 shadow-2xl border border-gray-200">
              <div className="bg-white rounded-xl overflow-hidden shadow-inner">
                {/* Simulator Header */}
                <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    <span className="text-gray-800 font-semibold">Goyo Business Console</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Live</span>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                {/* Demo Content Area */}
                <div className="h-[600px] p-6 relative overflow-hidden bg-white">
                  {/* Dynamic content based on active step */}
                  <DemoContent activeStep={activeStep} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Demo content component for different steps
function DemoContent({ activeStep }: { activeStep: number }) {
  const getStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">工作流程 / 新增助理</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#100c1d] mb-4">定義 AI 助理角色</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">助理名稱</label>
                  <input
                    type="text"
                    defaultValue="客服小助手"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">角色描述</label>
                  <textarea
                    defaultValue="專業的客服代表，熟悉公司產品和服務，能夠友善地協助客戶解決問題"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">工作流程 / 匯入知識庫</div>
            </div>
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center bg-primary/5">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary">📁</span>
              </div>
              <h3 className="text-lg font-semibold text-[#100c1d] mb-2">拖拉檔案到此處</h3>
              <p className="text-gray-600 text-sm">支援 PDF、DOCX、TXT 格式</p>
              <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                或點擊選擇檔案
              </button>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">工作流程 / 助理準備中</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
              </div>
              <h3 className="text-lg font-semibold text-[#100c1d] mb-2">訓練進行中...</h3>
              <p className="text-gray-600 text-sm mb-4">正在處理您的知識庫文件</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-3/4 transition-all duration-300"></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">預計完成時間：2 分鐘</p>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">工作流程 / 連接服務</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['官網客服', 'LINE Bot', 'Facebook', 'WhatsApp'].map((platform, index) => (
                <div key={platform} className="border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs">📱</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#100c1d]">{platform}</h4>
                      <p className="text-xs text-gray-500">點擊連接</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 5:
        return (
          <div className="space-y-4">
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">即時客服對話</div>
            </div>
            <div className="bg-white rounded-lg p-4 max-h-96 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">客</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg max-w-xs">
                    <p className="text-sm">你好，我想了解你們的 AI 服務</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-primary p-3 rounded-lg max-w-xs">
                    <p className="text-sm text-white">您好！很高興為您介紹我們的 AI 解決方案。請問您的企業規模大約多少人？這樣我可以為您推薦最適合的方案。</p>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">G</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">客</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg max-w-xs">
                    <p className="text-sm">我們公司大約 50 人，主要是製造業</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return <div>選擇一個步驟開始演示</div>
    }
  }

  return getStepContent()
}