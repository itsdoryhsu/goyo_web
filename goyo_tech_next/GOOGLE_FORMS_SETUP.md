# Google Forms 串接設定指南

## 步驟一：建立 Google Forms

1. 前往 [Google Forms](https://forms.google.com)
2. 點擊「建立」→「空白表單」
3. 設定表單標題：「Goyo Tech 免費試用申請」

## 步驟二：新增表單欄位

按照以下順序新增欄位：

### 1. 姓名
- 欄位類型：「簡答」
- 標題：希望怎麼稱呼您
- 必填：是

### 2. 連絡電話
- 欄位類型：「簡答」
- 標題：連絡電話
- 必填：是

### 3. 電子郵件
- 欄位類型：「簡答」
- 標題：電子郵件
- 驗證：電子郵件地址
- 必填：是

### 4. 公司名稱
- 欄位類型：「簡答」
- 標題：您所在的公司名稱
- 必填：是

### 5. 公司規模
- 欄位類型：「選擇題」
- 標題：公司規模
- 選項：
  - 10人以下
  - 10人～50人
  - 50～200人
  - 200人以上
- 必填：是

### 6. 有興趣的服務產品
- 欄位類型：「選擇題」
- 標題：有興趣的服務產品
- 選項：
  - Xerno
  - Xtan
  - Xparse
  - 其他合作
- 必填：是

### 7. 需求或疑問
- 欄位類型：「段落」
- 標題：您的需求或疑問
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
- 電話欄位：`entry.987654321`
- 等等...

## 步驟四：更新程式配置

在 `lib/google-forms.ts` 檔案中更新 `defaultFormConfig`：

```typescript
export const defaultFormConfig: GoogleFormConfig = {
  formUrl: 'https://docs.google.com/forms/u/0/d/e/[YOUR_FORM_ID]/formResponse',
  fields: {
    name: 'entry.[YOUR_NAME_FIELD_ID]',
    phone: 'entry.[YOUR_PHONE_FIELD_ID]',
    email: 'entry.[YOUR_EMAIL_FIELD_ID]',
    companyName: 'entry.[YOUR_COMPANY_FIELD_ID]',
    companySize: 'entry.[YOUR_COMPANY_SIZE_FIELD_ID]',
    interestedService: 'entry.[YOUR_SERVICE_FIELD_ID]',
    requirements: 'entry.[YOUR_REQUIREMENTS_FIELD_ID]'
  }
}
```

## 步驟五：測試表單

1. 填寫並提交網站表單
2. 檢查 Google Forms 回應是否收到資料
3. 確認所有欄位都正確映射

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