'use client'

import { useState } from 'react'
import Carousel from './Carousel'
import ServiceCard from './ServiceCard'
import {
  TargetIcon, MoneyIcon, DocumentIcon, UsersIcon, ShoppingCartIcon, CubeIcon,
  ChartBarIcon, BrainIcon, CogIcon, PlugIcon, SparklesIcon, CloudIcon,
  TrendingUpIcon, CodeIcon, WrenchIcon, ChatIcon, ClipboardListIcon,
  UserGroupIcon, CheckIcon
} from './Icons'

// 三大核心產品服務
const coreProducts = [
  {
    id: 'knowledge-center',
    icon: <DocumentIcon />,
    title: '企業知識中心',
    subtitle: 'Enterprise Knowledge Hub',
    description: 'RAG技術，協助效率查找行政規章、教育手冊、產品手冊等企業營運資訊。',
    keyFeatures: ['智能文件歸檔', '知識庫問答', '政策查詢', '專家經驗傳承'],
    color: 'purple',
    useCases: [
      { title: '單據辨識歸檔', desc: 'OCR識別各類單據，自動分類歸檔' },
      { title: '人資政策查詢', desc: '員工可快速查詢公司政策與福利' },
      { title: '知識視覺化', desc: '重要資訊儀表板展示' }
    ]
  },
  {
    id: 'ai-agents',
    icon: <BrainIcon />,
    title: '企業AI代理服務',
    subtitle: 'AI Agent Solutions',
    description: '部署專業AI代理，自動化重複性工作，24/7無間斷服務，提升營運效率。',
    keyFeatures: ['24/7自動服務', '多語言支援', '情緒識別', '智能決策'],
    color: 'purple',
    useCases: [
      { title: '智能客服代理', desc: '24/7處理客戶諮詢' },
      { title: '財務分析代理', desc: '即時財務資訊分析' },
      { title: '銷售助手代理', desc: '潛客開發與智能報價' }
    ]
  },
  {
    id: 'custom-ai',
    icon: <CogIcon />,
    title: '企業AI應用客製',
    subtitle: 'Custom AI Applications',
    description: '為企業量身打造AI解決方案，從機器學習模型到系統整合，實現落地應用開發。',
    keyFeatures: ['客製ML模型', '系統整合', '流程自動化', '雲端部署'],
    color: 'purple',
    useCases: [
      { title: 'AI工作流程', desc: '客製化業務流程自動化' },
      { title: 'API整合服務', desc: '第三方系統無縫整合' },
      { title: '數位轉型顧問', desc: '完整轉型策略與實施' }
    ]
  }
]

// 產品服務卡片組件
interface ProductCardProps {
  product: typeof coreProducts[0]
}

function ProductCard({ product }: ProductCardProps) {
  // 映射顏色類別
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    purple: {
      bg: 'bg-primary/10',
      text: 'text-primary',
      button: 'bg-gray-600 hover:bg-gray-700'
    },
    teal: {
      bg: 'bg-teal-50',
      text: 'text-teal-600',
      button: 'bg-teal-600 hover:bg-teal-700'
    }
  }

  const colors = colorClasses[product.color as keyof typeof colorClasses]

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-y-0">
      {/* 產品圖示和標題 */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${colors.bg} ${colors.text} transition-transform transition-transform duration-300`}>
          {product.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#100c1d] mb-1">{product.title}</h3>
          <p className="text-sm text-gray-500 font-medium">{product.subtitle}</p>
        </div>
      </div>

      {/* 產品描述 */}
      <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

      {/* 核心功能 */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-[#100c1d] mb-3">核心功能</h4>
        <div className="grid grid-cols-2 gap-2">
          {product.keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckIcon className="w-3 h-3 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 應用案例 */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-[#100c1d] mb-3">應用案例</h4>
        <div className="space-y-2">
          {product.useCases.map((useCase, index) => (
            <div key={index} className="text-sm">
              <span className="font-medium text-gray-800">{useCase.title}</span>
              <span className="text-gray-500 ml-2">{useCase.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA 按鈕 */}
      <div className="flex gap-3">
        <button className={`flex-1 ${colors.button} text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200`}>
          了解方案
        </button>
        <button className="px-6 py-3 border border-gray-200 rounded-lg font-semibold text-gray-700 hover:border-gray-300 transition-colors duration-200">
          案例分析
        </button>
      </div>
    </div>
  )
}

// 人才服務三大板塊
const talentServiceCards = [
  {
    id: 'knowledge-center',
    icon: <DocumentIcon />,
    title: '服務介紹',
    subtitle: 'Service Overview',
    description: '專攻 AI 數據與 AWS 雲端，提供技術開發人才。支援企業靈活調派彈性擴充，精準達成開發目標。',
    features: [
      'Python 及 AWS 技術專業',
      '多技術領域工程師派遣',
      '團隊經理及測試工程師',
    ],
    idealFor: {
      title: '我們的團隊可以...',
      items: [
        '支援發展雲端業務',
        '支援進行數位轉型',
        '提供專業技術建議'
      ]
    },
    color: 'purple'
  },
  {
    icon: <UserGroupIcon />,
    title: '駐點特色',
    subtitle: 'On-site Advantages',
    description: '長期型駐點/遠端開發，並以專家身分助您篩選、共同面試技術人才，幫您精準組建最強團隊。',
    features: [
      '極具彈性的全職人員',
      '特定的顧問及開發工程師',
      '配合派駐加速團隊溝通'
    ],
    idealFor: {
      title: '當您的專案...',
      items: [
        '需要長期技術支援',
        '急需資訊人力需求',
        '期望擁有一個高度整合的資訊團隊'
      ]
    },
    color: 'purple'
  },
  {
    icon: <CogIcon />,
    title: '專案特色',
    subtitle: 'Project Advantages',
    description: '專案型任務外包，協助企業在有限的預算與時間內，達成專案目標並交付高品質成果。',
    features: [
      '節省您的人事成本',
      '企業可專注於核心業務',
      '彈性配合業務需求發展',
    ],
    idealFor: {
      title: '當您的專案...',
      items: [
        '有明確的專案範圍',
        '缺乏短期人力支援',
        '需要建立軟體架構的堅強顧問'
      ]
    },
    color: 'purple'
  }
]

// 人才服務卡片組件
interface TalentServiceCardProps {
  card: typeof talentServiceCards[0]
}

function TalentServiceCard({ card }: TalentServiceCardProps) {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      icon: 'bg-blue-100'
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      icon: 'bg-green-100'
    },
    purple: {
      bg: 'bg-primary/10',
      text: 'text-primary',
      icon: 'bg-primary/20'
    }
  }

  const colors = colorClasses[card.color as keyof typeof colorClasses]

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* 圖示和標題 */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${colors.icon} ${colors.text}`}>
          {card.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#100c1d] mb-1">{card.title}</h3>
          <p className="text-sm text-gray-500 font-medium">{card.subtitle}</p>
        </div>
      </div>

      {/* 描述 */}
      <p className="text-gray-600 leading-relaxed mb-6 text-sm">{card.description}</p>

      {/* 特色功能 */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-[#100c1d] mb-3">
          {card.title === '服務介紹' ? '服務內容' :
           card.title === '駐點特色' ? '駐點服務的優勢' :
           '專案服務的優勢'}
        </h4>
        <div className="space-y-2">
          {card.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckIcon className="w-3 h-3 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 適用情況 (只有駐點和專案有此區塊) */}
      {card.idealFor && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[#100c1d] mb-3">{card.idealFor.title}</h4>
          <div className="space-y-2">
            {card.idealFor.items.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckIcon className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// 人才類型資料 (保留給「我想找人才」區塊使用)
const talentTypes = [
  {
    icon: <CloudIcon />,
    title: '雲端架構師',
    description: '具備AWS、Azure、GCP等雲端平台專業知識，協助企業規劃與建置可擴展的雲端基礎設施。',
    tags: ['AWS', 'Kubernetes', 'DevOps'],
    color: 'blue' as const
  },
  {
    icon: <TrendingUpIcon />,
    title: '數據分析師',
    description: '擅長數據挖掘與分析，運用統計學方法與機器學習技術，提供企業決策洞察與預測分析。',
    tags: ['Python', 'SQL', 'Tableau'],
    color: 'green' as const
  },
  {
    icon: <CodeIcon />,
    title: '前端工程師',
    description: '精通現代前端技術框架，具備優秀的使用者介面設計能力，打造流暢的用戶體驗。',
    tags: ['React', 'Vue', 'TypeScript'],
    color: 'purple' as const
  },
  {
    icon: <WrenchIcon />,
    title: '後端工程師',
    description: '具備扎實的後端開發經驗，熟悉微服務架構與資料庫設計，確保系統穩定性與效能。',
    tags: ['Node.js', 'Java', 'MongoDB'],
    color: 'orange' as const
  }
]

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'technology' | 'talent'>('technology')

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('technology')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'technology'
                  ? 'bg-primary text-white'
                  : 'text-[#6b7280] hover:text-[#100c1d]'
              }`}
            >
              我想找方案
            </button>
            <button
              onClick={() => setActiveTab('talent')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'talent'
                  ? 'bg-primary text-white'
                  : 'text-[#6b7280] hover:text-[#100c1d]'
              }`}
            >
              我想找人才
            </button>
          </div>
        </div>

        {/* Technology Tab Content */}
        {activeTab === 'technology' && (
          <div>
            {/* 三大核心產品展示 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {coreProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* 信任建立區塊 */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#100c1d] mb-6">為什麼選擇果友科技？</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-gray-600 font-medium">系統開發經驗</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99%</div>
                    <div className="text-gray-600 font-medium">客戶滿意度</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2025</div>
                    <div className="text-gray-600 font-medium">SBIR認證廠商</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-gray-600 font-medium">Agent代理技術</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Talent Tab Content */}
        {activeTab === 'talent' && (
          <div>
            {/* 三大服務板塊 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {talentServiceCards.map((card, index) => (
                <TalentServiceCard key={index} card={card} />
              ))}
            </div>

            {/* 可選：保留原本的人才類型輪播 */}
            <Carousel title="專業人才類型">
              {talentTypes.map((talent, index) => (
                <ServiceCard
                  key={index}
                  icon={talent.icon}
                  title={talent.title}
                  description={talent.description}
                  tags={talent.tags}
                  color={talent.color}
                />
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </section>
  )
}