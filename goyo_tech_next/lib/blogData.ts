// lib/blogData.ts - 文章數據類型定義和數據

export interface BlogPost {
  id: string
  title: string
  slug: string
  category: string
  author: string
  publishedDate: string
  readTime: number
  featuredImage: string
  excerpt: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "intro-goyo-tech",
    title: "擁抱 AI 代理人：果友科技如何為企業打造自動化未來",
    slug: "intro-goyo-tech",
    category: "Company News",
    author: "Goyo Team",
    publishedDate: "2026-01-16",
    readTime: 5,
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    excerpt: "我們不盲從 AI 浪潮，而是透過 10 年實戰經驗，為您量身打造最合適的 AI 代理人與自動化流程。了解果友科技如何協助企業降本增效。",
    content: `
在這個數位轉型加速的時代，許多企業面臨著同樣的困境：關鍵數據散落在不同系統、大量重複性的行政作業消耗了團隊的創造力，以及面對 AI 浪潮卻不知從何下手的焦慮。

這正是**果友科技（Goyo Tech）**存在的理由。

## 我們是誰？

果友科技專注於**系統整合、AI 代理人（AI Agent）開發與流程自動化**。我們的核心理念很簡單：不盲目追求新技術，而是專注於解決痛點。

我們擁有超過 10 年的數據分析實戰經驗，並獲得 **115 年中央型 SBIR 核定**，這代表我們的技術實力與創新能力已獲得政府級的認證與支持。

## 我們能解決什麼問題？

透過先進的 **RAG（檢索增強生成）** 技術與客製化開發，我們將 AI 轉化為您企業的實質生產力：

- **財務自動化：** 告別手動輸入發票的痛苦。我們的 AI 能在 5 秒內完成發票辨識、分類並匯入試算表，準確率高達 90% 以上。
- **企業專屬 AI 助理：** 建立懂您公司內部流程、法規與庫存數據的 Chatbot。無論是人資規章查詢、庫存狀態確認，還是新進員工引導，都能在幾秒鐘內獲得精準回覆。
- **資訊安全與合規：** 我們深知數據的重要性，因此提供企業級的資訊安全架構，確保您的數據在私有且安全的環境下運作。

## 為什麼選擇果友？

> 「憑藉十年數據實戰經驗，不盲從 AI 浪潮，而是透過專業診斷，為您精準找出最適合、最省成本的技術方案。」

我們與大型顧問公司的不同之處在於「**靈活敏捷**」。沒有冗長的行政程序，由技術核心團隊直接對接您的需求，確保開發不走彎路。

我們以「**節省成本**」與「**提高生產力**」作為專案價值的衡量標準。無論您是需要導入會計流程自動化，還是希望構建全方位的企業知識大腦，果友科技都是您最值得信賴的技術夥伴。

準備好讓 AI 成為您的最佳員工了嗎？歡迎聯繫我們，開始您的自動化轉型之旅。
    `
  }
]

// 工具函數
export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)))
}