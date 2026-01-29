export default function AboutHeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl xl:text-6xl mb-6">
            關於<span className="text-primary">果友</span>
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
            {/* 🔥 請填入更具說服力的公司介紹 */}
            <span className="bg-primary/5 border border-primary/20 px-2 py-1 rounded text-primary font-medium">
              果友科技成立於2024年，我們專注於AI、AWS雲端架構與數據科技領域，三大面向應用開發。團隊具備[具體年資]年的[相關技術/行業]經驗，獲得SBIR認證。
            </span>
          </p>

          {/* 新增：創始團隊簡介區塊 */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-text-main mb-8">創始團隊</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 🔥 請填入真實創始團隊資訊 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">照片</span>
                </div>
                <h3 className="font-bold text-lg text-text-main">
                  <span className="bg-primary/5 border border-primary/20 px-1 rounded text-primary font-medium">Scott Lin</span>
                </h3>
                <p className="text-primary font-medium mb-2">
                  <span className="bg-primary/5 border border-primary/20 px-1 rounded text-primary font-medium">創辦人 CEO</span>
                </p>
                <p className="text-sm text-text-muted">
                  <span className="bg-primary/5 border border-primary/20 px-1 rounded text-primary font-medium">【背景經歷，如：前XXX公司技術總監，X年AI開發經驗】</span>
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">照片</span>
                </div>
                <h3 className="font-bold text-lg text-text-main">
                  <span className="bg-primary/5 border border-primary/20 px-1 rounded text-primary font-medium"> Doris Hsu</span>
                </h3>
                <p className="text-primary font-medium mb-2">
                  <span className="bg-primary/5 border border-primary/20 px-1 rounded text-primary font-medium">營運長 COO </span>
                </p>
                <p className="text-sm text-text-muted">
                  <span className="bg-primary/5 border border-primary/20 px-1 rounded text-primary font-medium">【背景經歷】</span>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}