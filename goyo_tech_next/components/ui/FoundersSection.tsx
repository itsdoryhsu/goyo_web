import Image from 'next/image'

interface Founder {
  name: string
  role: string
  image: string
  description: string
}

const founders: Founder[] = [
  {
    name: 'Scott Lin',
    role: '創辦人 CEO',
    image: '/scott-avatar.png',
    description: '前知名科技公司技術總監，具備 10 年以上 AI 開發經驗，深耕雲端架構與分散式系統開發。'
  },
  {
    name: 'Doris Hsu',
    role: '營運長 COO',
    image: '/doris-avatar.png',
    description: '擁有豐富的科技業產品營運與市場開發背景，致力於將先進技術轉化為實際商業價值。'
  }
]

export default function FoundersSection() {
  return (
    <section className="py-24 bg-background-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-main mb-4">創始團隊</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 mb-6 overflow-hidden ring-4 ring-primary/10">
                  <Image
                    alt={`${founder.name} - ${founder.role}`}
                    className="w-full h-full object-cover"
                    src={founder.image}
                    width={160}
                    height={160}
                    quality={95}
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1">{founder.name}</h3>
                <p className="font-medium text-text-muted mb-4">{founder.role}</p>
                <div className="w-full h-px bg-gray-100 my-4"></div>
                <p className="text-text-muted leading-relaxed italic">
                  「{founder.description}」
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}