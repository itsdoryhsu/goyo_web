import { SparklesIcon, UserGroupIcon } from './Icons'

export default function PartnerMessagesSection() {
  return (
    <section className="py-24 px-4 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="bg-white/70 backdrop-blur-[10px] border-2 border-gray-200 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg className="w-36 h-36" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>

          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-text-main">
            <SparklesIcon className="w-6 h-6 text-primary" />
            致合作企業
          </h2>

          <div className="text-lg md:text-xl text-text-muted leading-loose space-y-4 font-serif">
            <p>在果友科技，我們深信科技不應只是工具，更應該是推動企業創新的核心引擎。</p>
            <p>面對快速變遷的數位時代，我們致力於為每一位合作夥伴提供最穩定、最具前瞻性的技術解決方案。從數據驅動決策到 AI 自動化運作，我們與您同行，確保每一份資源都能產生最大的商業影響力。</p>
            <p className="text-right pt-4">— 果友科技 全體團隊敬上</p>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-[10px] border-2 border-gray-200 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg className="w-36 h-36" fill="currentColor" viewBox="0 0 24 24">
              <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-text-main">
            <UserGroupIcon className="w-6 h-6 text-primary" />
            致果友夥伴
          </h2>

          <div className="text-lg md:text-xl text-text-muted leading-loose space-y-4 font-serif">
            <p>我們不只在尋找員工，我們在尋找志同道合的夢想實踐家。</p>
            <p>這裡沒有僵化的體制，只有對技術的熱愛與持續學習的文化。我們提供彈性的工作環境與優渥的福利，因為我們相信，只有在身心平衡且受到激勵的狀態下，人才展現出真正的創造力。</p>
            <p className="text-right pt-4">— 創辦人 Scott & Doris</p>
          </div>
        </div>
      </div>
    </section>
  )
}