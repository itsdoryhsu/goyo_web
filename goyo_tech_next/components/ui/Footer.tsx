import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text-main text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="果友科技"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">果友科技</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed max-w-md">
              專注營運痛點、提供有效率、自動化的落地服務方案。為企業選定最合適的技術解決方案，AI 真正落地，為企業創造價值。
            </p>

            {/* SBIR Certification Badge */}
            <div className="mb-6 inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl px-4 py-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SBIR</span>
              </div>
              <div>
                <div className="text-primary font-bold text-sm">2025年中央型SBIR</div>
                <div className="text-gray-300 text-xs">政府核定創新廠商</div>
              </div>
            </div>

          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">解決方案</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-gray-300 hover:text-primary transition-colors">AI 代理服務</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-primary transition-colors">客製化專案</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-primary transition-colors">系統整合</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-primary transition-colors">雲端部署</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">關於我們</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-primary transition-colors">公司介紹</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">人才招募</Link></li>
              <li><Link href="/#testimonials" className="text-gray-300 hover:text-primary transition-colors">合作夥伴</Link></li>
              <li><Link href="/#contact" className="text-gray-300 hover:text-primary transition-colors">聯繫我們</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} 果友科技 Goyo Tech. 版權所有.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">隱私政策</Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">服務條款</Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-primary text-sm transition-colors">Cookie 政策</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}