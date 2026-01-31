'use client'

export default function BlogHeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 lg:pt-48 lg:pb-16 bg-gradient-to-b from-gray-50 to-white">
      {/* 背景裝飾 */}
      <div className="absolute top-20 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#ffcdf2]/20 blur-3xl opacity-60"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[#9980ff]/10 via-[#9980ff]/5 to-transparent rounded-full blur-3xl -z-10 opacity-40"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-black leading-tight tracking-tight text-[#100c1d] sm:text-5xl lg:text-6xl mb-6">
          <span className="gradient-text">友</span> 話直說
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          來聊聊吧～關於專案、營運、創業的真心話與大冒險。
        </p>
      </div>
    </section>
  )
}