// Demo Modal JavaScript Module
class DemoModal {
    constructor(config = {}) {
        this.config = {
            // Google Forms 設定
            googleFormUrl: config.googleFormUrl || 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse',
            fieldMapping: config.fieldMapping || {
                name: 'entry.123456789',      // 姓名欄位的 entry ID
                email: 'entry.987654321',     // 公司信箱欄位的 entry ID
                company: 'entry.456789123',   // 公司名稱欄位的 entry ID
                usecase: 'entry.789123456'    // 希望自動化場景欄位的 entry ID
            },
            recipientEmail: config.recipientEmail || 'cy.hsu@goyo-tech.com',
            ...config
        };

        this.modal = null;
        this.closeButton = null;
        this.demoForm = null;
        this.isInitialized = false;

        this.init();
    }

    async init() {
        if (this.isInitialized) return;

        // 載入模態框 HTML
        await this.loadModalHTML();

        // 綁定事件
        this.bindEvents();

        this.isInitialized = true;
        console.log('Demo modal initialized successfully (Google Forms backend)');
    }

    async loadModalHTML() {
        // 直接嵌入 HTML，避免 fetch 依賴
        const modalHTML = `
<!-- Demo Booking Modal -->
<div id="demoModal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/50 backdrop-blur-sm">
    <div class="bg-white rounded-2xl max-w-md w-full mx-4 p-8 shadow-2xl transform transition-all">
        <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-text-main">預約產品演示</h3>
            <button id="closeModal" class="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>

        <p class="text-text-muted mb-6">
            填寫您的資訊，我們將安排專人為您展示 Goyo Tech AI 代理的強大功能。
        </p>

        <form id="demoForm" class="flex flex-col gap-6">
            <div>
                <label class="block text-sm font-bold text-text-main mb-2" for="modal-name">姓名</label>
                <input class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                       id="modal-name" placeholder="王小明" type="text" required/>
            </div>
            <div>
                <label class="block text-sm font-bold text-text-main mb-2" for="modal-email">公司信箱</label>
                <input class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                       id="modal-email" placeholder="wang@company.com" type="email" required/>
            </div>
            <div>
                <label class="block text-sm font-bold text-text-main mb-2" for="modal-company">公司名稱</label>
                <input class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                       id="modal-company" placeholder="您的公司名稱" type="text" required/>
            </div>
            <div>
                <label class="block text-sm font-bold text-text-main mb-2" for="modal-usecase">希望自動化的場景</label>
                <textarea class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          id="modal-usecase" placeholder="例如：客戶服務自動化、發票處理、銷售線索管理..." rows="3"></textarea>
            </div>
            <button class="mt-2 w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2"
                    type="submit">
                預約演示
                <span class="material-symbols-outlined">calendar_month</span>
            </button>
        </form>

        <p class="text-xs text-gray-500 text-center mt-4">
            我們將在 24 小時內聯繫您安排演示時間
        </p>
    </div>
</div>`;

        // 插入到 body 末尾
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // 獲取元素引用
        this.modal = document.getElementById('demoModal');
        this.closeButton = document.getElementById('closeModal');
        this.demoForm = document.getElementById('demoForm');
    }

    bindEvents() {
        if (!this.modal || !this.closeButton || !this.demoForm) return;

        // 綁定關閉按鈕
        this.closeButton.addEventListener('click', () => this.close());

        // 點擊背景關閉
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        // ESC 鍵關閉
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.close();
            }
        });

        // 綁定表單提交
        this.demoForm.addEventListener('submit', (e) => this.handleSubmit(e));

        // 綁定所有觸發按鈕
        this.bindTriggerButtons();
    }

    bindTriggerButtons() {
        // 綁定所有具有 data-demo-button 屬性的按鈕
        const demoButtons = document.querySelectorAll('[data-demo-button]');
        console.log('Found demo buttons:', demoButtons.length);

        demoButtons.forEach((button, index) => {
            // 避免重複綁定，先移除之前的事件監聽器
            if (button.demoClickHandler) {
                button.removeEventListener('click', button.demoClickHandler);
            }

            // 創建新的事件處理器
            button.demoClickHandler = (e) => {
                e.preventDefault();
                console.log('Demo button clicked:', index);
                this.open();
            };

            // 綁定新的事件處理器
            button.addEventListener('click', button.demoClickHandler);
        });
    }

    open() {
        if (!this.modal) {
            console.error('Modal not found!');
            return;
        }

        console.log('Opening modal');
        this.modal.classList.remove('hidden');
        this.modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }

    close() {
        if (!this.modal) return;

        this.modal.classList.add('hidden');
        this.modal.classList.remove('flex');
        document.body.style.overflow = 'auto';

        // 重置表單
        if (this.demoForm) {
            this.demoForm.reset();
        }
    }

    async handleSubmit(e) {
        e.preventDefault();

        // 獲取表單數據
        const formData = {
            name: document.getElementById('modal-name').value,
            email: document.getElementById('modal-email').value,
            company: document.getElementById('modal-company').value,
            usecase: document.getElementById('modal-usecase').value
        };

        // 簡單驗證
        if (!formData.name || !formData.email || !formData.company) {
            alert('請填寫必要資訊');
            return;
        }

        // 顯示發送中狀態
        const submitButton = this.demoForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = '發送中...';
        submitButton.disabled = true;

        try {
            await this.submitToGoogleForms(formData);
            alert('感謝您的預約！我們將在 24 小時內與您聯繫安排演示時間。');
            this.close();
        } catch (error) {
            console.error('Form submission failed:', error);
            alert('發送失敗，請稍後再試或直接聯繫我們：cy.hsu@goyo-tech.com');
        } finally {
            // 恢復按鈕狀態
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        }
    }

    async submitToGoogleForms(formData) {
        // 準備 Google Forms 提交資料
        const formDataToSend = new FormData();

        // 對應表單欄位到 Google Forms entry IDs
        formDataToSend.append(this.config.fieldMapping.name, formData.name);
        formDataToSend.append(this.config.fieldMapping.email, formData.email);
        formDataToSend.append(this.config.fieldMapping.company, formData.company);
        if (formData.usecase) {
            formDataToSend.append(this.config.fieldMapping.usecase, formData.usecase);
        }

        // 輸出除錯資訊
        console.log('Submitting to Google Forms:', {
            url: this.config.googleFormUrl,
            data: {
                [this.config.fieldMapping.name]: formData.name,
                [this.config.fieldMapping.email]: formData.email,
                [this.config.fieldMapping.company]: formData.company,
                [this.config.fieldMapping.usecase]: formData.usecase || '無'
            }
        });

        // 使用 no-cors 模式提交到 Google Forms
        const response = await fetch(this.config.googleFormUrl, {
            method: 'POST',
            mode: 'no-cors', // 避免 CORS 問題
            body: formDataToSend
        });

        console.log('Google Forms submission completed');
        return response;
    }

    // 公開方法供外部調用
    static create(config = {}) {
        return new DemoModal(config);
    }
}

// 全域變數供直接使用
window.DemoModal = DemoModal;