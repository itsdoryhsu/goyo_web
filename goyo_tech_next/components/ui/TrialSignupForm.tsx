'use client'

import { useState } from 'react'
import { CheckIcon, SparklesIcon } from './Icons'
import { submitToGoogleForms } from '@/lib/google-forms'

interface FormData {
  name: string
  email: string
  company: string
  companySize: string
  usecase: string
}

interface TrialSignupFormProps {
  onSubmit?: (data: FormData) => void
}

export default function TrialSignupForm({ onSubmit }: TrialSignupFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    companySize: '',
    usecase: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 簡單的表單驗證
    if (!formData.name || !formData.email || !formData.company) {
      alert('請填寫所有必填欄位')
      return
    }

    setIsSubmitting(true)

    try {
      // 提交到 Google Forms
      const success = await submitToGoogleForms(formData)

      if (success) {
        console.log('表單已成功提交到 Google Forms')
      }

      // 調用 onSubmit 回調（如果有）
      if (onSubmit) {
        onSubmit(formData)
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('表單提交失敗:', error)
      // 對於 Google Forms，通常仍然顯示成功，因為 no-cors 模式限制
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckIcon className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#100c1d] mb-4">申請已送出！</h3>
        <p className="text-gray-600 mb-6">
          我們已收到您的免費試用申請。專業顧問將在24小時內聯繫您，協助設置專屬的AI代理系統。
        </p>
        <div className="bg-primary/10 rounded-lg p-4 mb-6">
          <p className="text-sm text-primary font-medium">
            <SparklesIcon className="w-4 h-4 inline mr-2" />
            立即查看郵箱取得設置指南和專屬試用連結
          </p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: '',
              email: '',
              company: '',
              companySize: '',
              usecase: ''
            })
          }}
          className="text-primary hover:text-primary-dark font-medium transition-colors"
        >
          再次申請
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#100c1d] mb-4">預約產品演示</h3>
        <p className="text-gray-600">
          填寫您的資訊，我們將安排專人為您展示 Goyo Tech AI 代理的強大功能。
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-[#100c1d] mb-2">
            姓名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
            placeholder="王小明"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-[#100c1d] mb-2">
            公司信箱 <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
            placeholder="wang@company.com"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="company" className="block text-sm font-bold text-[#100c1d] mb-2">
              公司名稱 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
              placeholder="您的公司名稱"
            />
          </div>

          <div>
            <label htmlFor="companySize" className="block text-sm font-bold text-[#100c1d] mb-2">
              公司規模
            </label>
            <select
              id="companySize"
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 12px center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '16px'
              }}
            >
              <option value="">選擇規模</option>
              <option value="1-10">1-10人</option>
              <option value="11-50">11-50人</option>
              <option value="51-200">51-200人</option>
              <option value="201-1000">201-1000人</option>
              <option value="1000+">1000人以上</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="usecase" className="block text-sm font-bold text-[#100c1d] mb-2">
            希望自動化的場景
          </label>
          <textarea
            id="usecase"
            name="usecase"
            value={formData.usecase}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
            placeholder="例如：客戶服務自動化、發票處理、銷售線索管理..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              發送中...
            </>
          ) : (
            <>
              預約演示
            </>
          )}
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        我們將在 24 小時內聯繫您安排演示時間
      </p>
    </div>
  )
}