'use client'

import { UserIcon, ClockIcon } from './Icons'
import TrialSignupForm from './TrialSignupForm'

// 客戶推薦資料
const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CTO, TechFlow Inc.',
    content: 'Goyo Tech 的代理完美處理了我們的客戶入職流程。我們看到人工作業減少了 75%，同時提升了客戶滿意度。'
  },
  {
    name: 'Michael Chen',
    title: 'Operations Director, GlobalCorp',
    content: '投資報酬率立即顯現。我們的發票處理時間從數天縮短到數小時，準確率提升到 99.5%。這是改變遊戲規則的技術。'
  },
  {
    name: 'Emily Rodriguez',
    title: 'VP Sales, EnterpriseHub',
    content: '我們的線索審核變得完全自動化。銷售生產力提升了 40%，轉換率翻倍成長。'
  }
]

interface TestimonialCardProps {
  testimonial: {
    name: string
    title: string
    content: string
  }
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <UserIcon className="text-gray-600" />
        </div>
        <div>
          <div className="font-semibold text-[#100c1d]">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.title}</div>
        </div>
      </div>
      <p className="text-gray-600 italic leading-relaxed">
        "{testimonial.content}"
      </p>
    </div>
  )
}

export default function ProductCTASection() {
  return (
    <>
      {/* Customer Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#100c1d] mb-4">受業界領導者信賴</h2>
            <p className="text-lg text-gray-600">
              看看領先企業如何透過 Goyo Tech 轉型其營運模式。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: CTA Content */}
            <div className="relative overflow-hidden rounded-3xl bg-[#100c1d] px-6 py-16 text-center lg:text-left shadow-2xl sm:px-16">
              {/* Background Effects */}
              <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-[#9980ff]/30 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-[#9980ff]/20 blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                  準備好自動化您的企業了嗎？
                </h2>
                <p className="max-w-xl text-lg text-gray-300 mb-8">
                  立即開始免費試用。無需信用卡。設置不到 10 分鐘。
                </p>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#9980ff] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300">14天完整功能試用</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#9980ff] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300">專業技術團隊協助設置</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#9980ff] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300">24小時內快速回應</span>
                  </div>
                </div>

                {/* Additional Trust Signal */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 text-sm">
                  <ClockIcon className="w-4 h-4" />
                  <span>SBIR 2025認證廠商</span>
                  <span className="mx-2">•</span>
                  <span>50+企業信賴選擇</span>
                </div>
              </div>
            </div>

            {/* Right: Trial Signup Form */}
            <div>
              <TrialSignupForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}