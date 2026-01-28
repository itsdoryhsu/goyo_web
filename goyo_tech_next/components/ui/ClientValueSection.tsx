'use client'

import { CheckIcon, StarIcon, ShieldIcon, TrendingUpIcon } from './Icons'

export default function ClientValueSection() {
  const values = [
    {
      icon: <ShieldIcon />,
      title: '可靠的技術夥伴',
      description: '我們不只提供解決方案，更是您數位轉型路上的可靠夥伴。從初期規劃到長期維護，全程陪伴您的成長。'
    },
    {
      icon: <TrendingUpIcon />,
      title: '實現真正的效益',
      description: '我們專注於為您創造可量化的商業價值，不是空泛的技術展示，而是實際提升營運效率與競爭力。'
    },
    {
      icon: <StarIcon />,
      title: '客製化的專業服務',
      description: '每個企業都有獨特的需求，我們提供量身訂做的解決方案，確保技術完美融入您的業務流程。'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* 標題區塊 */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            致我們的客戶
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            我們承諾為您創造的價值
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            選擇果友科技，不僅是選擇一個技術供應商，更是選擇一個真正理解您業務需求、
            致力於與您共同成長的合作夥伴。
          </p>
        </div>

        {/* 價值主張卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary w-8 h-8">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* 承諾聲明 */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              我們的承諾
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                在果友科技，我們深知每一分投資都是對未來的信任。因此，我們承諾以最高的專業標準、
                最誠摯的服務態度，協助您的企業在數位時代中脫穎而出。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">透明的溝通</h4>
                    <p className="text-gray-600">清楚說明每個步驟，讓您完全掌握項目進度</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">持續的支援</h4>
                    <p className="text-gray-600">不僅是導入，更提供長期的技術維護與優化</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">成果導向</h4>
                    <p className="text-gray-600">以實際的商業效益為目標，確保投資回報</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">創新思維</h4>
                    <p className="text-gray-600">持續關注最新技術，為您提供前沿解決方案</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}