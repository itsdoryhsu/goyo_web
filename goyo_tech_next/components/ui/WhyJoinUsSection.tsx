import { BrainIcon, CodeIcon, UserGroupIcon } from './Icons'

export default function WhyJoinUsSection() {
  const benefits = [
    {
      title: "穩扎穩打",
      english: "Engineering Craft",
      description: "我們拒絕為了速度犧牲品質。我們不盲目追求技術流行，也不接受為了速度而堆疊技術債。在這裡，我們一起幫客戶選定最合適的解決方案並完成它。",
      icon: CodeIcon,
      color: "emerald",
      gradients: {
        from: "emerald-400",
        to: "teal-500",
        bg: "emerald-50",
        border: "emerald-100",
        text: "emerald-600",
        hover: "emerald-600"
      }
    },
    {
      title: "擁抱未知",
      english: "The Frontier",
      description: "AI 領域沒有標準答案，我們鼓勵「快速試錯」。你的價值不在於你知道什麼，而在於你能多快掌握新技術並解決難題。",
      icon: BrainIcon,
      color: "cyan",
      gradients: {
        from: "cyan-400",
        to: "blue-500",
        bg: "cyan-50",
        border: "cyan-100",
        text: "cyan-600",
        hover: "cyan-600"
      }
    },
    {
      title: "透明共享",
      english: "Radical Candor",
      description: "拒絕辦公室政治。我們實行高度透明的資訊共享，並提供具競爭力的分紅激勵。我們視每位夥伴為共同創業者，公司的勝利就是你的勝利。",
      icon: UserGroupIcon,
      color: "pink",
      gradients: {
        from: "pink-400",
        to: "rose-500",
        bg: "pink-50",
        border: "pink-100",
        text: "pink-600",
        hover: "pink-600"
      }
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-main mb-4">為什麼選擇加入果友？</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            我們不只提供一份工作，更提供一個讓你發揮極致潛能的舞台。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={benefit.title}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${benefit.gradients.from} to-${benefit.gradients.to} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-${benefit.gradients.bg} flex items-center justify-center mb-6 transition-transform duration-300 border border-${benefit.gradients.border}`}>
                    <IconComponent className={`w-8 h-8 text-${benefit.gradients.text}`} />
                  </div>

                  <h3 className={`text-xl font-bold text-text-main mb-3 group-hover:text-${benefit.gradients.hover} transition-colors`}>{benefit.title}</h3>
                  <p className={`text-sm text-${benefit.gradients.text}/80 font-mono mb-4 uppercase tracking-wider font-semibold`}>{benefit.english}</p>

                  <p className="text-text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}