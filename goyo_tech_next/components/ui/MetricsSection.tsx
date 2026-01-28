export default function MetricsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#100c1d] mb-4">
            數字證明我們的專業實力
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            作為政府核定的SBIR創新廠商，我們致力於為企業提供最專業的AI解決方案
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* SBIR Certification */}
          <div className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">SBIR</span>
            </div>
            <div>
              <div className="font-bold text-[#100c1d]">2025年中央型SBIR</div>
              <div className="text-sm text-gray-600">政府核定創新廠商</div>
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">98%</span>
            </div>
            <div>
              <div className="font-bold text-[#100c1d]">客戶滿意度98%</div>
              <div className="text-sm text-gray-600">專業服務品質保證</div>
            </div>
          </div>

          {/* Cloud Partnership */}
          <div className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">AWS</span>
            </div>
            <div>
              <div className="font-bold text-[#100c1d]">AWS Partner</div>
              <div className="text-sm text-gray-600">雲端解決方案合作夥伴</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}