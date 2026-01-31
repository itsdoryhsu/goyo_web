'use client'

import { BrainIcon, CogIcon, TrendingUpIcon, PlugIcon, CodeIcon, SparklesIcon, ShieldIcon, LockIcon, CloudIcon, CheckIcon } from './Icons'

// 功能特色資料
const workflowFeatures = [
  {
    icon: <BrainIcon />,
    title: '情境感知決策',
    description: '代理能理解業務規則、歷史情境和即時資料，在無人干預下做出智慧決策。'
  },
  {
    icon: <CogIcon />,
    title: '多步驟工作流程',
    description: '跨不同系統串連複雜流程，具備自動錯誤處理和回滾功能。'
  },
  {
    icon: <TrendingUpIcon />,
    title: '持續學習',
    description: '代理透過學習成功模式和使用者回饋，持續改善效能。'
  }
]

const integrationFeatures = [
  {
    icon: <PlugIcon />,
    title: '一鍵連接',
    description: '透過預建整合，以最少設定連接熱門企業工具。'
  },
  {
    icon: <CodeIcon />,
    title: '客製 API 支援',
    description: '使用我們的開發者工具包，為傳統系統或專有 API 建置客製連接器。'
  },
  {
    icon: <SparklesIcon />,
    title: '即時數據同步',
    description: '透過雙向同步化，在所有連接系統中保持數據一致性。'
  }
]

const securityFeatures = [
  {
    icon: <ShieldIcon />,
    title: 'SOC2 Type II 認證',
    description: '符合國際安全標準，確保您的數據處理流程安全可靠。'
  },
  {
    icon: <CheckIcon />,
    title: 'GDPR 及 HIPAA 合規',
    description: '遵循歐盟及美國隱私法規，保障個人資料安全與隱私。'
  },
  {
    icon: <LockIcon />,
    title: '端對端加密',
    description: '所有資料傳輸皆採用軍用級加密技術，確保資訊安全無虞。'
  },
  {
    icon: <CloudIcon />,
    title: '內部部署選項',
    description: '可在您的私有雲或本地環境部署，確保數據不離開您的控制範圍。'
  }
]

// 整合平台資料
const integrationPlatforms = [
  { name: 'Google Sheets', color: 'green' },
  { name: 'Line', color: 'green' },
  { name: 'Messenger', color: 'blue' },
  { name: 'Gmail', color: 'red' },
  { name: 'Discord', color: 'purple' },
  { name: 'FastAPI', color: 'indigo' },
  { name: 'Webhooks', color: 'orange' },
  { name: 'MongoDB', color: 'teal' },
  { name: 'PostgreSQL', color: 'blue' }
]

// 安全性儀表板項目
const securityDashboardItems = [
  {
    title: '存取控制',
    description: '多重身分驗證已啟用',
    status: '啟用',
    color: 'green',
    icon: <ShieldIcon />
  },
  {
    title: '資料加密',
    description: 'AES-256 軍用級加密',
    status: '256-bit',
    color: 'blue',
    icon: <LockIcon />
  },
  {
    title: '稽核記錄',
    description: '完整操作軌跡記錄',
    status: '啟用',
    color: 'green',
    icon: <CheckIcon />
  }
]

interface FeatureItemProps {
  feature: {
    icon: React.ReactNode
    title: string
    description: string
  }
}

function FeatureItem({ feature }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 text-primary">
        {feature.icon}
      </div>
      <div>
        <h4 className="font-semibold text-[#100c1d] mb-2">{feature.title}</h4>
        <p className="text-gray-600 text-sm">{feature.description}</p>
      </div>
    </div>
  )
}

interface PlatformCardProps {
  platform: {
    name: string
    color: string
  }
}

function PlatformCard({ platform }: PlatformCardProps) {
  const colorClasses: Record<string, string> = {
    green: 'bg-green-50 text-green-600',
    blue: 'bg-blue-50 text-blue-600',
    red: 'bg-red-50 text-red-600',
    purple: 'bg-purple-50 text-purple-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    orange: 'bg-orange-50 text-orange-600',
    teal: 'bg-teal-50 text-teal-600'
  }

  return (
    <div className={`rounded-lg p-3 text-center ${colorClasses[platform.color]}`}>
      <div className="text-xs font-medium mt-1">{platform.name}</div>
    </div>
  )
}

export default function ProductFeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#100c1d] mb-4">完整的 AI 代理平台</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            設計、部署和管理企業智慧自動化所需的一切。
          </p>
        </div>

        {/* 智能工作流程自動化 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-[#100c1d] mb-6">智能工作流程自動化</h3>
            <div className="space-y-6">
              {workflowFeatures.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </div>

          {/* 工作流程演示卡片 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <BrainIcon className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="font-medium text-[#100c1d]">客戶入職代理</div>
                    <div className="text-sm text-gray-600">處理新客戶資料中...</div>
                  </div>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="pl-4 border-l-2 border-gray-200 ml-5 pb-4">
                <div className="space-y-2 text-sm text-gray-600">
                  <div>✓ 已驗證客戶資訊</div>
                  <div>✓ 已建立 CRM 記錄</div>
                  <div>✓ 已產生歡迎郵件</div>
                  <div className="text-primary">🔄 設定帳單整合中...</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 通用整合中心 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {integrationPlatforms.map((platform, index) => (
                  <PlatformCard key={index} platform={platform} />
                ))}
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">支援整合不同平台與服務</div>
                <div className="text-xs text-gray-500 mt-1">
                  FastAPI · RESTful API · Webhooks · MongoDB · PostgreSQL
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-[#100c1d] mb-6">通用整合中心</h3>
            <div className="space-y-6">
              {integrationFeatures.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>

        {/* 企業級安全性 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-[#100c1d] mb-6">企業級安全性</h3>
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </div>

          {/* 安全性儀表板 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldIcon className="text-4xl text-primary" />
              </div>
              <div className="text-lg font-semibold text-[#100c1d]">安全性儀表板</div>
            </div>

            <div className="space-y-4">
              {securityDashboardItems.map((item, index) => {
                const colorClasses = {
                  green: 'bg-green-100 text-green-600',
                  blue: 'bg-blue-100 text-blue-600'
                }

                const statusClasses = {
                  green: 'bg-green-100 text-green-800',
                  blue: 'bg-blue-100 text-blue-800'
                }

                return (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-medium text-[#100c1d]">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusClasses[item.color as keyof typeof statusClasses]}`}>
                      {item.status}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}