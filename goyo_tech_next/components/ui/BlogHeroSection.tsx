'use client'

export default function BlogHeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 lg:pt-48 lg:pb-16 bg-gradient-to-b from-gray-50 to-white">
      {/* 背景裝飾 */}
      <div className="absolute top-20 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#ffcdf2]/20 blur-3xl opacity-60"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[#9980ff]/10 via-[#9980ff]/5 to-transparent rounded-full blur-3xl -z-10 opacity-40"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-black leading-tight tracking-tight text-[#100c1d] sm:text-5xl lg:text-6xl mb-6">
          <span className="gradient-text">果友</span> 的一些小分享
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          不管是我們自己在專案面、營運面或是創業上的一些心路歷程，想要透過文字幫自己做個紀錄、同時也分享給大家 ：）
        </p>
      </div>
    </section>
  )
}