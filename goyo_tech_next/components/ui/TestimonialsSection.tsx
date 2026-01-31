const testimonials = [
  {
    id: 1,
    content: "🔥【請填入真實客戶見證】建議格式：「原本需要X天的Y工作，現在Z小時完成，具體節省了[具體成本/時間]」",
    author: {
      name: "【請填入真實客戶資訊】",
      position: "【職位】",
      company: "【某知名台灣製造業】",
      initials: "XX"
    }
  },
  {
    id: 2,
    content: "🔥【請填入真實客戶見證】建議包含：具體使用時間、解決的實際問題、量化的改善效果",
    author: {
      name: "【請填入真實客戶資訊】",
      position: "【職位】",
      company: "【某台灣金融科技公司】",
      initials: "YY"
    }
  },
  {
    id: 3,
    content: "🔥【請填入真實客戶見證】可匿名但需具體：「在[時間範圍]內，協助我們的[具體部門]完成[具體任務]，效率提升[具體%]」",
    author: {
      name: "【請填入真實客戶資訊】",
      position: "【職位】",
      company: "【某台灣電商平台】",
      initials: "ZZ"
    }
  }
]

// 💡 建議的真實見證格式範例：
// "原本需要3小時的客服回覆整理工作，現在15分鐘完成，每月節省120小時人力成本"
// "導入後第一個月，客戶查詢回覆時間從平均2小時縮短至3分鐘，客戶滿意度從78%提升至92%"
// "使用Goyo AI助理處理日常發票辨識，準確率達95%，每月為財務部門節省80小時重複作業"

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#9980ff] font-bold tracking-wider text-sm uppercase mb-2 block">
            案例分享
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#100c1d] sm:text-4xl mb-4">
            成為<span className="gradient-text">客戶</span>的信賴合作夥伴
          </h2>
          <p className="text-lg text-[#6b7280] font-medium">了解企業如何運用 Goyo 代理來擴展營運規模。</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-[#9980ff] to-[#7a66cc] rounded-2xl p-8 shadow-xl border-2 border-[#9980ff]/20 hover:shadow-2xl text-white overflow-hidden transition-shadow duration-300"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl transition-transform transition-all duration-1000"></div>

              <div className="relative z-10">
                <div className="flex text-yellow-300 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">⭐</span>
                  ))}
                </div>

                <p className="text-white/95 leading-relaxed mb-6 min-h-[120px]">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg">
                    {testimonial.author.initials}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.author.name}</div>
                    <div className="text-sm text-white/70">
                      {testimonial.author.position}, {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}