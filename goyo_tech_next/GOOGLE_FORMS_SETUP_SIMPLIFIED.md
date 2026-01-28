# Google Forms 串接設定指南（簡化版）

## 重要更新
根據demo-modal.js的原始設計，表單已簡化為4個欄位，去除複雜的選項，提升用戶體驗。

## 步驟一：建立 Google Forms

1. 前往 [Google Forms](https://forms.google.com)
2. 點擊「建立」→「空白表單」
3. 設定表單標題：「Goyo Tech 產品演示預約」

## 步驟二：新增表單欄位

按照以下順序新增欄位（簡潔版本，參考demo-modal設計）：

### 1. 姓名
- 欄位類型：「簡答」
- 標題：姓名
- 必填：是

### 2. 公司信箱
- 欄位類型：「簡答」
- 標題：公司信箱
- 驗證：電子郵件地址
- 必填：是

### 3. 公司名稱
- 欄位類型：「簡答」
- 標題：公司名稱
- 必填：是

### 4. 希望自動化的場景
- 欄位類型：「段落」
- 標題：希望自動化的場景
- 說明文字：例如：客戶服務自動化、發票處理、銷售線索管理...
- 必填：否

## 步驟三：獲取表單資訊

### 1. 獲取 Form ID
從表單網址中提取：
```
https://docs.google.com/forms/d/[FORM_ID]/edit
```

### 2. 獲取欄位 ID
1. 在表單編輯頁面按 `F12` 開啟開發者工具
2. 點擊「預覽」按鈕查看表單
3. 檢查每個輸入欄位的 `name` 屬性
4. 格式為：`entry.xxxxxxxxx`

範例：
- 姓名欄位：`entry.123456789`
- 公司信箱：`entry.987654321`
- 公司名稱：`entry.456789123`
- 自動化場景：`entry.789123456`

## 步驟四：更新程式配置

在 `lib/google-forms.ts` 檔案中更新 `defaultFormConfig`：

```typescript
export const defaultFormConfig: GoogleFormConfig = {
  formUrl: 'https://docs.google.com/forms/u/0/d/e/[YOUR_FORM_ID]/formResponse',
  fields: {
    name: 'entry.[YOUR_NAME_FIELD_ID]',
    email: 'entry.[YOUR_EMAIL_FIELD_ID]',
    company: 'entry.[YOUR_COMPANY_FIELD_ID]',
    usecase: 'entry.[YOUR_USECASE_FIELD_ID]'
  }
}
```

## 步驟五：測試表單

1. 填寫並提交網站表單
2. 檢查 Google Forms 回應是否收到資料
3. 確認所有欄位都正確映射

## UI/UX 改善重點

### ✅ 已完成的改善
- **移除複雜選項**：去除「有興趣的服務產品」多選題，簡化決策過程
- **減少輸入框高度**：從 `py-3` 保持適中，提升視覺密度
- **統一設計風格**：採用demo-modal的簡潔風格
- **改善表單佈局**：從複雜的左右分欄改為單欄垂直佈局
- **優化按鈕設計**：採用漸層背景和圓角設計，視覺更吸引人

### 🎯 設計原則
1. **簡潔性**：只要求必要資訊，減少用戶負擔
2. **清晰性**：清楚的標籤和說明文字
3. **一致性**：與demo-modal.js保持一致的設計語言
4. **可用性**：適當的間距和視覺層次

## 注意事項

- 由於 CORS 政策限制，我們使用 `no-cors` 模式提交
- 即使提交成功，回應狀態可能無法被讀取
- 建議在 Google Forms 設定中開啟電子郵件通知來確認收到回覆

## 疑難排解

**表單沒有收到資料**
1. 檢查 Form ID 是否正確
2. 確認欄位 ID 是否正確
3. 確認表單設定為「接受回覆」

**欄位映射錯誤**
1. 重新檢查每個欄位的 `name` 屬性
2. 確保欄位順序與設定一致
3. 檢查欄位類型是否匹配