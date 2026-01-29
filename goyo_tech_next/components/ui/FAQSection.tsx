'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white transition-colors duration-200"
      >
        <span className="font-semibold text-[#100c1d] text-lg">{question}</span>
        <div className={`w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}>
          <span className="text-primary font-bold text-lg">+</span>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`px-6 pb-4 text-[#6b7280] leading-relaxed transition-all duration-400 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
        }`}>
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "什麼是SBIR？為什麼這很重要？",
      answer: "SBIR（Small Business Innovation Research）是政府為鼓勵中小企業投入創新研發的補助計畫。果友科技獲得2025年中央型SBIR核定，代表我們的AI技術創新獲得政府認可，技術實力與商業潛力都經過嚴格評估。"
    },
    {
      question: "果友科技的AI代理與市面上的聊天機器人有什麼不同？",
      answer: "我們的AI代理不只是聊天機器人，而是能深度整合企業系統的智能助手。具備工作流程自動化、多系統數據整合、企業級安全防護等特色。能真正解決業務流程問題，而非僅提供對話服務。"
    },
    {
      question: "部署AI代理需要多長時間？",
      answer: "根據系統複雜度不同，基礎AI代理可在1-2週內完成部署。客製化專案通常需要4-8週。我們提供完整的專案管理服務，確保準時交付並提供詳細的導入培訓。"
    },
    {
      question: "如何確保數據安全與隱私保護？",
      answer: "我們遵循ISO 27001資訊安全管理標準，採用端到端加密、角色權限管控、數據本地化處理等多重防護機制。所有AI處理都在企業私有環境中執行，絕不會將敏感數據傳輸至外部。"
    },
    {
      question: "費用如何計算？有哪些方案可選擇？",
      answer: "我們提供靈活的計費模式：包含SaaS訂閱制、一次性專案開發、混合式服務等。價格依據功能需求、使用量、客製化程度而定。歡迎聯繫我們獲取專屬報價方案。"
    },
    {
      question: "是否提供技術支援與維護服務？",
      answer: "提供24/7技術支援、定期系統更新、性能監控、故障排除等完整維護服務。並有專屬技術顧問協助系統優化，確保AI代理持續發揮最大價值。"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#100c1d] mb-4">
            常見問題解答
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            對AI代理有疑問嗎？這裡整理了客戶最常問的問題，幫助您快速了解我們的服務
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}