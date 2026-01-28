export default function CompanyValuesSection() {
  const values = [
    {
      title: "主動",
      english: "Proactive",
      description: "我們不被動等待指令，而是積極尋找解決方案。在機會出現之前，我們已經做好了準備，隨時迎接挑戰。"
    },
    {
      title: "學習",
      english: "Learning",
      description: "保持謙卑與好奇心。技術日新月異，我們將每一次的未知視為成長的養分，透過不斷學習來突破極限。"
    },
    {
      title: "信心",
      english: "Confidence",
      description: "相信團隊，也相信自己。在困難面前不輕言放棄，堅信我們的努力能為客戶創造價值，對未來充滿希望。"
    }
  ]

  // Removed rotation effects for cleaner appearance

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-10 blur-[120px] bg-primary rounded-full"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-text-main mb-8 leading-tight">
            果友的理念
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <span className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-6xl text-primary/20 font-serif">"</span>
            <p className="text-2xl text-text-main font-medium italic leading-relaxed px-8">
              新創充滿挑戰但也充滿機會，要我們願意去嘗試才有可能。
            </p>
            <span className="absolute bottom-0 right-0 translate-x-4 translate-y-4 text-6xl text-primary/20 font-serif">"</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl hover:shadow-primary/20 text-white overflow-hidden transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl transition-transform transition-all duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="border-b border-white/20 pb-6 mb-6">
                  <h3 className="text-3xl font-bold text-white tracking-wide mb-1">{value.title}</h3>
                  <p className="text-sm text-white/70 font-medium tracking-wider uppercase opacity-90">{value.english}</p>
                </div>

                <div className="flex-grow">
                  <p className="text-white/95 leading-relaxed text-lg font-light">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}