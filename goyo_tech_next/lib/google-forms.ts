// Google Forms 配置
export interface GoogleFormConfig {
  formUrl: string;
  fields: {
    name: string;
    email: string;
    company: string;
    usecase: string;
  };
}

// 預設配置 - 請替換為您的實際 Google Form 資訊
export const defaultFormConfig: GoogleFormConfig = {
  formUrl: 'https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse',
  fields: {
    name: 'entry.YOUR_NAME_FIELD_ID',
    email: 'entry.YOUR_EMAIL_FIELD_ID',
    company: 'entry.YOUR_COMPANY_FIELD_ID',
    usecase: 'entry.YOUR_USECASE_FIELD_ID'
  }
}

// 提交表單數據到 Google Forms
export async function submitToGoogleForms(
  data: {
    name: string;
    email: string;
    company: string;
    usecase: string;
  },
  config: GoogleFormConfig = defaultFormConfig
): Promise<boolean> {
  try {
    const formData = new FormData();

    // 映射表單資料到 Google Forms 欄位
    formData.append(config.fields.name, data.name);
    formData.append(config.fields.email, data.email);
    formData.append(config.fields.company, data.company);

    if (data.usecase) {
      formData.append(config.fields.usecase, data.usecase);
    }

    // 提交到 Google Forms
    await fetch(config.formUrl, {
      method: 'POST',
      mode: 'no-cors', // 避免 CORS 問題
      body: formData
    });

    return true;
  } catch (error) {
    console.error('Google Forms 提交失敗:', error);
    return false;
  }
}

// 設定說明
export const setupInstructions = `
如何設定 Google Forms 串接：

1. 建立 Google Form：
   - 前往 https://forms.google.com
   - 建立新表單，包含以下欄位：
     * 姓名（短文字，必填）
     * 公司信箱（短文字，必填）
     * 公司名稱（短文字，必填）
     * 希望自動化的場景（長文字，可選）

2. 獲取 Form ID：
   - 從表單分享連結中提取 Form ID
   - 格式：https://docs.google.com/forms/d/[FORM_ID]/edit
   - formUrl 格式：https://docs.google.com/forms/u/0/d/e/[FORM_ID]/formResponse

3. 獲取欄位 ID：
   - 在表單編輯頁面按 F12 開啟開發者工具
   - 檢查每個輸入欄位的 name 屬性
   - 格式通常是 "entry.xxxxxxxxx"

4. 更新配置：
   - 修改 lib/google-forms.ts 中的 defaultFormConfig
   - 替換 YOUR_FORM_ID 和所有 YOUR_*_FIELD_ID
`;