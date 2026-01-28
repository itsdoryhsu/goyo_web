'use client'

import { HeartIcon, LightBulbIcon, UsersIcon } from './Icons'

export default function EmployeeMessageSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* 標題區塊 */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            致我們的團隊成員
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            歡迎加入果友大家庭
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            親愛的新夥伴，歡迎來到果友科技！在這裡，我們不僅是同事，更是一起追求卓越的夥伴。
          </p>
        </div>

        {/* 主要訊息區塊 */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 mb-12">
          <div className="max-w-4xl mx-auto">
            {/* CEO 頭像區塊 - 您可以替換為實際照片 */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">CEO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">創辦人的話</h3>
            </div>

            {/* 您的喊話內容 - 請填入您的實際內容 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="absolute top-4 left-4 text-4xl text-primary/20">"</div>
              <div className="text-center space-y-6 pt-4">
                <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-6">
                  <p className="text-lg text-yellow-800 font-medium">
                    📝 <strong>請在此填入您對新進員工的喊話內容</strong>
                  </p>
                  <p className="text-sm text-yellow-700 mt-2">
                    建議包含：公司文化、期許、發展機會、團隊價值等內容
                  </p>
                </div>

                {/* 範例內容 - 您可以替換為實際內容 */}
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    <em>[您的個人訊息將在此顯示]</em>
                  </p>
                  <p>
                    <em>例如：分享您的創業理念、對團隊的期許、公司的願景等...</em>
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-4xl text-primary/20">"</div>
            </div>

            <div className="text-right mt-6">
              <p className="text-gray-700 font-medium">果友科技創辦人</p>
              <p className="text-primary font-semibold">[您的姓名]</p>
            </div>
          </div>
        </div>

        {/* 核心價值觀 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HeartIcon className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">熱忱與投入</h3>
            <p className="text-gray-600">
              我們相信熱忱是成功的起點，每一個專案都值得我們全力以赴。
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <LightBulbIcon className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">創新思維</h3>
            <p className="text-gray-600">
              鼓勵每個人提出想法，創新是我們持續成長的動力。
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <UsersIcon className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">團隊合作</h3>
            <p className="text-gray-600">
              我們相信團隊的力量大於個人，一起成長，一起成功。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}