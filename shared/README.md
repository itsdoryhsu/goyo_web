# Goyo Tech 共用組件架構

## 文件結構

```
shared/
├── base-template.html     # 基礎 HTML 樣板
├── styles.css            # 統一樣式定義
├── header.html           # Header 組件
├── footer.html           # Footer 組件
├── scripts.js            # 共用 JavaScript
└── README.md             # 使用說明
```

## 使用方法

### 1. 基礎樣板 (base-template.html)

這是所有頁面的基礎模板，包含完整的 HTML 結構和變數佔位符：

```html
<!-- 變數說明 -->
{{PAGE_TITLE}}     - 頁面標題
{{PAGE_HEAD}}      - 頁面專屬的 head 內容
{{HEADER}}         - Header 組件內容
{{PAGE_CONTENT}}   - 主要內容區塊
{{FOOTER}}         - Footer 組件內容
{{PAGE_SCRIPTS}}   - 頁面專屬的 JavaScript
```

### 2. 建立新頁面步驟

1. **複製基礎樣板**
```bash
cp shared/base-template.html new-page.html
```

2. **替換變數內容**
```html
<!-- 將這些變數替換為實際內容 -->
{{PAGE_TITLE}} → 實際頁面標題
{{HEADER}} → 載入 shared/header.html 的內容
{{PAGE_CONTENT}} → 你的頁面內容
{{FOOTER}} → 載入 shared/footer.html 的內容
```

### 3. 樣式系統

#### 統一色彩配置
```css
/* 主要顏色 */
primary: #9980ff
primary-dark: #7a66cc
secondary: #6366f1
accent: #ffcdf2

/* 背景色 */
background-light: #ffffff
background-dark: #130f23
background-soft: #fafafa

/* 文字顏色 */
text-main: #100c1d
text-muted: #6b7280
```

#### 字體配置
```css
/* 英文字體 */
font-display: Inter (主要顯示字體)
font-body: Inter (內文字體)

/* 中文字體 - Chiron GoRound TC */
font-chinese: Chiron GoRound TC (中文字體)
font-tc: Chiron GoRound TC (繁體中文字體)
```

#### 中文字體使用方法
```html
<!-- Tailwind CSS 類別 -->
<h1 class="font-chinese">中文標題</h1>
<p class="font-tc">中文內容</p>

<!-- CSS 類別 -->
<h1 class="heading-chinese">中文標題樣式</h1>
<p class="body-chinese">中文內文樣式</p>
<span class="text-chinese">一般中文文字</span>
```

#### 常用 CSS 類別
```css
/* 字體樣式 */
.font-chinese      - Chiron GoRound TC 中文字體
.font-tc           - Chiron GoRound TC 繁體中文字體
.heading-chinese   - 中文標題樣式 (粗體 + 行高優化)
.body-chinese      - 中文內文樣式 (正常重量 + 適讀行高)
.text-chinese      - 一般中文文字 (含字距優化)

/* 視覺效果 */
.gradient-text     - 漸層文字效果
.shadow-soft       - 柔和陰影

/* 按鈕組件 */
.btn-primary       - 主要按鈕樣式
.btn-secondary     - 次要按鈕樣式
.card-base         - 基礎卡片樣式

/* 導航樣式 */
.nav-active        - 導航活動狀態
.nav-link          - 導航連結樣式
```

### 4. Header 組件功能

- **自動導航高亮**: 根據當前 URL 自動設定活動導航項目
- **響應式選單**: 包含移動端選單切換功能
- **頁面標識**: 使用 `data-page` 屬性標識不同頁面

```html
<!-- 設定當前頁面 -->
<a href="about_us.html" data-page="about">關於我們</a>
```

### 5. JavaScript 功能

#### 全域函數
```javascript
// 導航管理
setActiveNav(currentPage)           // 設定活動導航
toggleMobileMenu()                  // 切換移動端選單

// Modal 管理
openDemoModal()                     // 開啟演示 Modal
closeDemoModal()                    // 關閉演示 Modal

// 工具函數
showNotification(message, type)     // 顯示通知
scrollToElement(elementId)          // 平滑滾動
debounce(func, delay)               // 防抖函數
throttle(func, delay)               // 節流函數
```

#### 自動功能
- 根據 URL 自動設定導航高亮
- ESC 鍵關閉 Modal
- 表單驗證和提交處理

### 6. 頁面專屬內容

對於需要頁面專屬樣式或 JavaScript 的情況：

```html
<!-- 在頁面中添加專屬內容 -->
<!-- 替換 {{PAGE_HEAD}} -->
<style>
.page-specific-style {
    /* 頁面專屬樣式 */
}
</style>

<!-- 替換 {{PAGE_SCRIPTS}} -->
<script>
// 頁面專屬 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 頁面初始化邏輯
});
</script>
```

## 維護指南

### 1. 修改全站樣式
- 編輯 `shared/styles.css`
- 所有頁面會自動套用變更

### 2. 修改 Header/Footer
- 編輯 `shared/header.html` 或 `shared/footer.html`
- 使用 Server-Side Includes 或手動更新所有頁面

### 3. 新增共用功能
- 在 `shared/scripts.js` 中新增函數
- 透過 `window.GoyoTech` 物件匯出

### 4. 色彩系統調整
- 修改 `shared/styles.css` 中的 Tailwind 配置
- 確保所有頁面使用統一的設計語言

## 最佳實踐

1. **保持一致性**: 所有頁面都應使用共用組件
2. **避免重複**: 不要在個別頁面重複定義已存在的樣式
3. **文檔更新**: 新增功能時記得更新此 README
4. **測試**: 修改共用組件後測試所有頁面
5. **版本控制**: 重要變更前備份現有檔案

## 未來優化建議

1. **自動化**: 考慮使用構建工具自動替換模板變數
2. **組件化**: 進一步模組化常用的內容區塊
3. **性能**: 實施圖片懶載入和資源壓縮
4. **SEO**: 為每個頁面添加結構化數據