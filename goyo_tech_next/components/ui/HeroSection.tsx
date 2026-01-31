import Button from './Button'
import { ArrowRightIcon } from './Icons'

interface FloatingCard {
  id: string
  title: string
  subtitle: string
  number: string
  image: string
  alt: string
  translateY: string
  zIndex?: string
  border?: string
}

const floatingCards: FloatingCard[] = [
  {
    id: '1',
    number: '01',
    title: 'Technology',
    subtitle: 'Next-Gen Core',
    image: '',
    alt: 'Technology - 專業技術介面展示',
    translateY: 'translate-y-4',
    border: 'border border-white/40 dark:border-slate-700/50'
  },
  {
    id: '2',
    number: '02',
    title: 'Cooperation',
    subtitle: 'Synergetic Growth',
    image: '',
    alt: 'Cooperation - 團隊協作展示',
    translateY: '-translate-y-2',
    zIndex: 'z-20',
    border: 'border-2 border-white/50 dark:border-slate-700/80'
  },
  {
    id: '3',
    number: '03',
    title: 'Efficiency',
    subtitle: 'Streamlined Flow',
    image: '',
    alt: 'Efficiency - 效率優化展示',
    translateY: '-translate-y-6',
    border: 'border border-white/40 dark:border-slate-700/50'
  }
]

function FloatingCard({ card }: { card: FloatingCard }) {
  const gradientMap: { [key: string]: string } = {
    '1': 'bg-gradient-to-br from-primary/80 to-purple-600/80',
    '2': 'bg-gradient-to-br from-blue-500/80 to-primary/80',
    '3': 'bg-gradient-to-br from-purple-500/80 to-pink-500/80'
  }

  return (
    <div className={`floating-card w-[210px] h-[380px] rounded-[2.5rem] overflow-hidden ${card.translateY} relative group ${card.border} ${card.zIndex || ''} ${gradientMap[card.id]}`}>
      <div className="absolute inset-0 card-image-overlay flex items-end p-8">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <span className="text-white font-bold text-xs tracking-[0.2em] uppercase opacity-60">{card.number}</span>
          <h3 className="text-white font-bold text-xl tracking-wide">{card.title}</h3>
          <p className="text-white/60 text-[10px] mt-1 leading-tight uppercase tracking-widest">{card.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="min-h-screen hero-gradient flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-10">

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              讓 <span className="text-gradient">簡單</span>成為常態<br/>
              <span className="text-3xl md:text-5xl font-extrabold opacity-90 tracking-normal block mt-4">Always Simplify</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
              透過尖端數據與 AI 技術，將複雜的企業營運轉化為高效直覺的自動化流程。與您的團隊並肩協作，共創數位轉型新紀元。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-gradient-to-br from-primary to-purple-600"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-gradient-to-br from-blue-500 to-primary"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-gradient-to-br from-purple-500 to-pink-500"></div>
              </div>
              <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                政府、企業的信任選擇
              </div>
            </div>
          </div>
        </div>

        {/* Right - Floating Cards */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-end gap-5 pr-4">
          {floatingCards.map((card) => (
            <FloatingCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  )
}