'use client'

import { useState } from 'react'

interface ChatMessage {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export default function SmartChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: '您好！我是果友科技的AI客服助手，有什麼可以幫助您的嗎？',
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: getAutoReply(inputMessage),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getAutoReply = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes('價格') || input.includes('費用') || input.includes('收費')) {
      return '我們提供靈活的定價方案。具體費用會根據您的需求和使用量來確定。建議您填寫免費試用表單，我們的專員會為您提供詳細報價。'
    }

    if (input.includes('試用') || input.includes('demo')) {
      return '您可以申請免費試用我們的AI解決方案！請點擊頁面上的「免費試用」按鈕填寫表單，我們會在24小時內與您聯繫安排演示。'
    }

    if (input.includes('聯絡') || input.includes('聯繫') || input.includes('電話')) {
      return '您可以通過以下方式聯繫我們：\n📧 Email: info@goyo.tech\n📞 電話: 02-1234-5678\n或填寫網站上的聯繫表單，我們會盡快回覆您。'
    }

    if (input.includes('ai客服') || input.includes('客服系統')) {
      return '我們的AI客服系統可以：\n• 24/7全天候服務\n• 自動回答常見問題\n• 智能對話引導\n• 無縫轉接人工客服\n• 多語言支援\n\n想了解更多嗎？'
    }

    if (input.includes('技術') || input.includes('開發')) {
      return '我們專精於AI技術開發，包括：\n• 自然語言處理\n• 機器學習模型訓練\n• 企業AI解決方案\n• 系統整合服務\n\n有特定技術問題嗎？請詳細描述，我會為您安排專業技術顧問。'
    }

    return '感謝您的提問！這個問題比較專業，建議您填寫聯繫表單或申請免費試用，我們的專業顧問會為您提供詳細解答。'
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 z-50 flex items-center justify-center"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[32rem] bg-white rounded-lg shadow-xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm"></div>
              <span className="font-medium">果友AI客服</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm shadow-sm ${
                    message.isUser
                      ? 'bg-gradient-to-r from-primary to-blue-600 text-white'
                      : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 border border-gray-200'
                  }`}
                >
                  <div className="whitespace-pre-line">{message.content}</div>
                  <div className={`text-xs mt-1 opacity-75 ${
                    message.isUser ? 'text-blue-100' : 'text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString('zh-TW', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 px-3 py-2 rounded-lg text-sm border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="輸入您的問題..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-white shadow-sm"
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-2 rounded-lg hover:from-primary-dark hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}