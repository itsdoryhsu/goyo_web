/**
 * Goyo Tech - 共用 JavaScript 功能
 */

// 全域變數
let demoModal = null;
let mobileMenu = null;

// DOM 載入完成後初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeComponents();
    setupEventListeners();
});

/**
 * 初始化組件
 */
function initializeComponents() {
    // 設定 Tailwind 配置
    if (typeof tailwind !== 'undefined' && window.tailwindConfig) {
        tailwind.config = window.tailwindConfig;
    }

    // 取得 DOM 元素
    demoModal = document.getElementById('demoModal');
    mobileMenu = document.getElementById('mobileMenu');

    // 初始化導航狀態
    setActiveNavigation();
}

/**
 * 設定事件監聽器
 */
function setupEventListeners() {
    // ESC 鍵關閉 Modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDemoModal();
        }
    });

    // 點擊背景關閉 Modal
    if (demoModal) {
        demoModal.addEventListener('click', function(e) {
            if (e.target === demoModal) {
                closeDemoModal();
            }
        });
    }

    // Demo 表單提交
    const demoForm = document.getElementById('demoForm');
    if (demoForm) {
        demoForm.addEventListener('submit', handleDemoFormSubmit);
    }

    // Modal 關閉按鈕
    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeDemoModal);
    }
}

/**
 * 設定導航活動狀態
 */
function setActiveNavigation() {
    const currentPath = window.location.pathname;
    let currentPage = 'home';

    // 判斷當前頁面
    if (currentPath.includes('product_landing')) {
        currentPage = 'product';
    } else if (currentPath.includes('about_us')) {
        currentPage = 'about';
    } else if (currentPath.includes('blog')) {
        currentPage = 'blog';
    }

    // 設定活動導航
    setActiveNav(currentPage);
}

/**
 * 設定活動導航項目
 * @param {string} currentPage - 當前頁面標識
 */
function setActiveNav(currentPage) {
    const navLinks = document.querySelectorAll('[data-page]');
    navLinks.forEach(link => {
        link.classList.remove('nav-active');
        if (link.dataset.page === currentPage) {
            link.classList.add('nav-active');
        }
    });
}

/**
 * 切換移動端選單
 */
function toggleMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

/**
 * 開啟演示預約 Modal
 */
function openDemoModal() {
    if (demoModal) {
        demoModal.classList.remove('hidden');
        demoModal.classList.add('flex');
        document.body.style.overflow = 'hidden';

        // 聚焦到第一個輸入框
        const firstInput = demoModal.querySelector('input[type="text"]');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }
}

/**
 * 關閉演示預約 Modal
 */
function closeDemoModal() {
    if (demoModal) {
        demoModal.classList.add('hidden');
        demoModal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
}

/**
 * 處理演示表單提交
 * @param {Event} e - 表單提交事件
 */
function handleDemoFormSubmit(e) {
    e.preventDefault();

    // 獲取表單數據
    const formData = {
        name: document.getElementById('modal-name')?.value || '',
        email: document.getElementById('modal-email')?.value || '',
        company: document.getElementById('modal-company')?.value || '',
        usecase: document.getElementById('modal-usecase')?.value || ''
    };

    // 基本驗證
    if (!formData.name || !formData.email || !formData.company) {
        showNotification('請填寫必要資訊', 'error');
        return;
    }

    // 電子郵件格式驗證
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showNotification('請輸入有效的電子郵件地址', 'error');
        return;
    }

    // 這裡可以添加實際的表單提交邏輯
    console.log('Demo form submitted:', formData);

    // 顯示成功訊息
    showNotification('感謝您的預約！我們將盡快與您聯繫安排演示時間。', 'success');

    // 關閉 Modal 並重置表單
    closeDemoModal();
    const form = document.getElementById('demoForm');
    if (form) {
        form.reset();
    }
}

/**
 * 顯示通知訊息
 * @param {string} message - 通知訊息
 * @param {string} type - 通知類型 ('success', 'error', 'info')
 */
function showNotification(message, type = 'info') {
    // 簡單的 alert，可以後續改為更美觀的通知組件
    if (type === 'error') {
        alert('錯誤: ' + message);
    } else {
        alert(message);
    }
}

/**
 * 平滑滾動到指定元素
 * @param {string} elementId - 目標元素 ID
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * 延遲載入圖片
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(function(img) {
        observer.observe(img);
    });
}

/**
 * 工具函數：防抖
 * @param {Function} func - 要防抖的函數
 * @param {number} delay - 延遲時間（毫秒）
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * 工具函數：節流
 * @param {Function} func - 要節流的函數
 * @param {number} delay - 間隔時間（毫秒）
 */
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func.apply(this, args);
        }
    };
}

// 匯出全域函數
window.GoyoTech = {
    setActiveNav,
    toggleMobileMenu,
    openDemoModal,
    closeDemoModal,
    showNotification,
    scrollToElement,
    lazyLoadImages,
    debounce,
    throttle
};