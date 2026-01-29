interface Highlight {
  number: string
  title: string
  description: string
}

const highlights: Highlight[] = [
  {
    number: '01',
    title: 'SBIR 國家計畫認證',
    description: '我們的技術創新能力獲得政府部門肯定，並持續投入高標準研發。'
  },
  {
    number: '02',
    title: 'AWS 核心合作夥伴',
    description: '專精於雲端原生開發，為客戶建立安全、可擴展的技術底層。'
  },
  {
    number: '03',
    title: '數據與 AI 雙修',
    description: '不只處理數據，更賦予數據靈魂，協助企業實現場景化 AI 轉型。'
  }
]

export default function HighlightsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-text-main">果友亮點</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-8 border-l-4 border-primary bg-background-soft"
            >
              <span className="text-5xl font-black text-primary/20 mb-4 block">
                {highlight.number}
              </span>
              <h3 className="text-xl font-bold mb-3 text-text-main">
                {highlight.title}
              </h3>
              <p className="text-text-muted">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}