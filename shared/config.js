// Google Forms 設定檔案
const CONFIG = {
    // Google Forms 設定
    googleForms: {
        googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSctfRQNWynn8YVzicfFXxS2O_n_bIB-8aeOKcu9wDRaXM-3Ew/formResponse',
        fieldMapping: {
            name: 'entry.1239319266',      // 客戶姓名欄位的 entry ID
            email: 'entry.791105070',     // 客戶信箱欄位的 entry ID
            company: 'entry.929836667',   // 客戶公司欄位的 entry ID
            usecase: 'entry.666085950'    // 使用場景欄位的 entry ID
        },
        recipientEmail: 'cy.hsu@goyo-tech.com'
    }
};

// 導出設定
window.APP_CONFIG = CONFIG;