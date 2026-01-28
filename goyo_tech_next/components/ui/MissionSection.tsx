'use client'

import { CheckIcon } from './Icons'

export default function MissionSection() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-main mb-4">我們的使命</h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            我們深信技術應該為人服務，而不是增加負擔。透過我們的解決方案，企業可以更輕鬆地擁抱數位轉型，提升效率與競爭力。
          </p>
        </div>

        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-4 md:p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-around gap-y-12 py-8 md:py-12">
            <div className="achievement-card w-full md:w-1/4 text-center">
              <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight mb-3 block">10+</span>
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm font-semibold text-text-main uppercase tracking-widest">實戰年資</span>
                <span className="text-xs text-text-muted font-medium">Industry Tenure</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-16 bg-gray-200"></div>

            <div className="achievement-card w-full md:w-1/4 text-center">
              <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight mb-3 block">5+</span>
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm font-semibold text-text-main uppercase tracking-widest">跨產業經驗</span>
                <span className="text-xs text-text-muted font-medium">Domain Expertise</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-16 bg-gray-200"></div>

            <div className="achievement-card w-full md:w-1/4 text-center relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl lg:text-4xl font-extrabold text-text-main tracking-tighter">SBIR</span>
                  <div className="px-2 py-1 bg-blue-50 border border-blue-100 rounded-md">
                    <CheckIcon className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-bold text-text-main uppercase tracking-widest">經濟部審核認定</span>
                  <span className="text-xs text-text-muted font-medium">Govt. Certified</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-px h-16 bg-gray-200"></div>

            <div className="achievement-card w-full md:w-1/4 text-center">
              <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight mb-3 block">3+</span>
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm font-semibold text-text-main uppercase tracking-widest">合作夥伴</span>
                <span className="text-xs text-text-muted font-medium">Client Success</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-10 text-text-muted text-sm font-medium tracking-wide">
          卓越技術實力，深耕產業數位轉型需求
        </p>
      </div>
    </section>
  )
}