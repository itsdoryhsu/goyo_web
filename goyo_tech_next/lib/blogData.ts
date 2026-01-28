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
    publishedDate: "2024-01-16",
    readTime: 5,
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    excerpt: "我們不盲從 AI 浪潮，而是透過 10 年實戰經驗，為您量身打造最合適的 AI 代理人與自動化流程。了解果友科技如何協助企業降本增效。",
    content: `
      <p>在這個數位轉型加速的時代，許多企業面臨著同樣的困境：關鍵數據散落在不同系統、大量重複性的行政作業消耗了團隊的創造力，以及面對 AI 浪潮卻不知從何下手的焦慮。</p>

      <p>這正是<strong>果友科技（Goyo Tech）</strong>存在的理由。</p>

      <h2>我們是誰？</h2>
      <p>果友科技專注於<strong>系統整合、AI 代理人（AI Agent）開發與流程自動化</strong>。我們的核心理念很簡單：不盲目追求新技術，而是專注於解決痛點。</p>
      <p>我們擁有超過 10 年的數據分析實戰經驗，並獲得 <strong>115 年中央型 SBIR 核定</strong>，這代表我們的技術實力與創新能力已獲得政府級的認證與支持。</p>

      <h2>我們能解決什麼問題？</h2>
      <p>透過先進的 <strong>RAG（檢索增強生成）</strong>技術與客製化開發，我們將 AI 轉化為您企業的實質生產力：</p>

      <ul>
        <li><strong>財務自動化：</strong> 告別手動輸入發票的痛苦。我們的 AI 能在 5 秒內完成發票辨識、分類並匯入試算表，準確率高達 90% 以上。</li>
        <li><strong>企業專屬 AI 助理：</strong> 建立懂您公司內部流程、法規與庫存數據的 Chatbot。無論是人資規章查詢、庫存狀態確認，還是新進員工引導，都能在幾秒鐘內獲得精準回覆。</li>
        <li><strong>資訊安全與合規：</strong> 我們深知數據的重要性，因此提供企業級的資訊安全架構，確保您的數據在私有且安全的環境下運作。</li>
      </ul>

      <h2>為什麼選擇果友？</h2>
      <blockquote>
        「憑藉十年數據實戰經驗，不盲從 AI 浪潮，而是透過專業診斷，為您精準找出最適合、最省成本的技術方案。」
      </blockquote>

      <p>我們與大型顧問公司的不同之處在於<strong>「靈活敏捷」</strong>。沒有冗長的行政程序，由技術核心團隊直接對接您的需求，確保開發不走彎路。</p>

      <p>我們以<strong>「節省成本」</strong>與<strong>「提高生產力」</strong>作為專案價值的衡量標準。無論您是需要導入會計流程自動化，還是希望構建全方位的企業知識大腦，果友科技都是您最值得信賴的技術夥伴。</p>

      <p>準備好讓 AI 成為您的最佳員工了嗎？歡迎聯繫我們，開始您的自動化轉型之旅。</p>
    `
  },
  {
    id: "ai-automation-trends-2024",
    title: "2024 年 AI 自動化趨勢：企業數位轉型的關鍵策略",
    slug: "ai-automation-trends-2024",
    category: "Technology Insights",
    author: "技術團隊",
    publishedDate: "2024-01-10",
    readTime: 8,
    featuredImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    excerpt: "探討 2024 年 AI 自動化的最新趨勢，包括生成式 AI、流程挖掘、智能決策系統等關鍵技術如何重塑企業營運模式。",
    content: `
      <p>2024 年被視為 AI 自動化真正成熟並廣泛應用於企業的關鍵年份。隨著技術的快速發展，我們看到了許多令人興奮的趨勢正在重新定義企業營運。</p>

      <h2>生成式 AI 的企業級應用</h2>
      <p>生成式 AI 不再只是寫作和創意的工具，它正在成為企業自動化的核心引擎：</p>

      <ul>
        <li><strong>智能文件處理：</strong> 自動解析合約、報告和郵件，提取關鍵信息並進行後續處理</li>
        <li><strong>客服自動化：</strong> 提供更自然、更個性化的客戶服務體驗</li>
        <li><strong>代碼生成：</strong> 加速軟體開發流程，提升開發效率</li>
      </ul>

      <h2>流程挖掘與智能優化</h2>
      <p>企業正在運用 AI 來發現和優化隱藏的業務流程瓶頸，實現真正的數據驅動決策。</p>

      <h2>果友科技的實踐經驗</h2>
      <p>基於我們與各行業客戶的合作經驗，我們發現最成功的 AI 實施都具備以下特點：明確的業務目標、循序漸進的導入策略，以及強大的技術支援團隊。</p>
    `
  },
  {
    id: "enterprise-ai-integration-guide",
    title: "企業 AI 整合實戰指南：從規劃到部署的完整流程",
    slug: "enterprise-ai-integration-guide",
    category: "Best Practices",
    author: "解決方案團隊",
    publishedDate: "2024-01-05",
    readTime: 12,
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    excerpt: "深入解析企業如何成功整合 AI 技術，涵蓋需求分析、技術選型、實施策略、風險管理等關鍵環節，提供可操作的實戰經驗。",
    content: `
      <p>許多企業對於 AI 整合既充滿期待又感到不安。本文將基於果友科技的實際專案經驗，為您提供一份完整的企業 AI 整合指南。</p>

      <h2>階段一：需求評估與目標設定</h2>
      <p>成功的 AI 專案始於清晰的業務目標。我們建議企業首先回答以下關鍵問題：</p>

      <ul>
        <li>哪些重複性任務消耗了最多人力資源？</li>
        <li>現有系統中哪些數據沒有被充分利用？</li>
        <li>客戶或內部用戶最常抱怨哪些流程效率問題？</li>
      </ul>

      <h2>階段二：技術架構設計</h2>
      <p>基於需求分析結果，設計適合的技術架構。關鍵考量包括：</p>

      <ul>
        <li><strong>資料安全：</strong> 選擇本地部署還是雲端解決方案</li>
        <li><strong>系統整合：</strong> 與現有 ERP、CRM 等系統的連接方式</li>
        <li><strong>擴展性：</strong> 未來業務增長的技術支援能力</li>
      </ul>

      <h2>階段三：實施與測試</h2>
      <p>我們建議採用敏捷開發方法，分階段實施 AI 解決方案，確保每個階段都能帶來實質的業務價值。</p>

      <h2>實際案例分享</h2>
      <p>一家製造業客戶透過我們的 AI 代理系統，將訂單處理時間從 2 小時縮短至 15 分鐘，同時將錯誤率降低至 0.1% 以下。</p>

      <p>想了解更多企業 AI 整合的實戰經驗？歡迎聯繫我們的專業顧問團隊。</p>
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
  return [...new Set(blogPosts.map(post => post.category))]
}