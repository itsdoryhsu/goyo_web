import Link from 'next/link'

export default function ContactCTASection() {
  return (
    <section className="py-20 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-background-dark px-6 py-16 text-center shadow-2xl sm:px-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-primary/30 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-primary/20 blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              準備加入我們嗎？
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
              我們始終在尋找優秀人才，幫助我們打造企業自動化的未來。
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="https://www.104.com.tw/company/1a2x6bnie0?jobsource=google"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 min-w-[160px] items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all active:scale-95"
              >
                查看職缺
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}