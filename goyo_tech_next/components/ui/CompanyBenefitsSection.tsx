'use client'

import {
  HeartIcon,
  AcademicCapIcon,
  ClockIcon,
  CurrencyDollarIcon,
  HomeIcon,
  UserGroupIcon,
  SparklesIcon,
  ShieldIcon
} from './Icons'

export default function CompanyBenefitsSection() {
  const benefits = [
    {
      category: '薪資福利',
      icon: <CurrencyDollarIcon />,
      color: 'green',
      items: [
        '具競爭力的薪資水準',
        '年終獎金與績效獎金',
        '股票選擇權計畫',
        '定期薪資檢討調整'
      ]
    },
    {
      category: '工作彈性',
      icon: <ClockIcon />,
      color: 'blue',
      items: [
        '彈性上下班時間',
        '遠距工作選項',
        '彈性工作地點',
        '工作生活平衡'
      ]
    },
    {
      category: '學習成長',
      icon: <AcademicCapIcon />,
      color: 'purple',
      items: [
        '技術培訓補助',
        '國內外研習機會',
        '證照考試補助',
        '內部技術分享會'
      ]
    },
    {
      category: '健康保障',
      icon: <ShieldIcon />,
      color: 'red',
      items: [
        '完整勞健保',
        '團體保險',
        '定期健康檢查',
        '員工健身補助'
      ]
    },
    {
      category: '休假制度',
      icon: <HeartIcon />,
      color: 'pink',
      items: [
        '優於勞基法的特休',
        '生日假',
        '家庭照顧假',
        '志工服務假'
      ]
    },
    {
      category: '辦公環境',
      icon: <HomeIcon />,
      color: 'orange',
      items: [
        '舒適的工作空間',
        '頂級開發設備',
        '免費咖啡茶飲',
        '休憩娛樂區域'
      ]
    }
  ]

  const colorClasses = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600',
    pink: 'bg-pink-100 text-pink-600',
    orange: 'bg-orange-100 text-orange-600'
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* 標題區塊 */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            員工福利
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            我們重視每一位夥伴的福祉
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            在果友科技，我們相信優秀的人才值得最好的照顧。我們提供完整的福利制度，
            讓每位夥伴都能在健康、快樂的環境中發揮最大潛能。
          </p>
        </div>

        {/* 福利卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className={`w-16 h-16 ${colorClasses[benefit.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <div className="w-8 h-8">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">{benefit.category}</h3>
              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 特色福利亮點 */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              <SparklesIcon className="w-8 h-8 text-yellow-500 inline-block mr-2" />
              特色福利
            </h3>
            <p className="text-gray-600">讓工作變得更有意義的額外福利</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">團隊建設活動</h4>
              <p className="text-sm text-gray-600">定期舉辦團隊聚餐、旅遊等活動</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <AcademicCapIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">技術圖書館</h4>
              <p className="text-sm text-gray-600">公司購置最新技術書籍供學習</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">創新提案獎金</h4>
              <p className="text-sm text-gray-600">鼓勵創新想法，提供實質獎勵</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">員工關懷基金</h4>
              <p className="text-sm text-gray-600">急難救助與生活關懷支持</p>
            </div>
          </div>
        </div>

        {/* 結語 */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            我們持續關注員工需求，不斷優化福利制度。因為我們深信，
            <span className="text-primary font-semibold">照顧好員工，就是照顧好公司的未來</span>。
          </p>
        </div>
      </div>
    </section>
  )
}