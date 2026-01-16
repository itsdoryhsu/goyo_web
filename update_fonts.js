// 快速字體更新腳本 - 在瀏覽器開發者工具中執行

// 為所有中文文字元素添加字體類別
function addChineseFontToElements() {
    // 找到所有包含中文字符的文字元素
    const chineseRegex = /[\u4e00-\u9fff]/;
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, div, li');

    let updatedCount = 0;

    textElements.forEach(element => {
        if (chineseRegex.test(element.textContent)) {
            // 根據元素類型添加適當的中文字體類別
            if (element.matches('h1, h2, h3, h4, h5, h6')) {
                element.classList.add('heading-chinese');
            } else if (element.matches('p')) {
                element.classList.add('body-chinese');
            } else {
                element.classList.add('font-chinese');
            }
            updatedCount++;
        }
    });

    console.log(`Updated ${updatedCount} elements with Chinese font`);
    return updatedCount;
}

// 添加 Chiron GoRound TC 字體載入
function addFontLink() {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Chiron+GoRound+TC:wght@200..900&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    console.log('Added Chiron GoRound TC font link');
}

// 添加字體 CSS 樣式
function addFontStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .font-chinese {
            font-family: "Chiron GoRound TC", sans-serif;
            font-optical-sizing: auto;
            font-style: normal;
        }
        .heading-chinese {
            font-family: "Chiron GoRound TC", sans-serif;
            font-optical-sizing: auto;
            font-style: normal;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.01em;
        }
        .body-chinese {
            font-family: "Chiron GoRound TC", sans-serif;
            font-optical-sizing: auto;
            font-style: normal;
            font-weight: 400;
            line-height: 1.6;
        }
    `;
    document.head.appendChild(style);
    console.log('Added Chinese font styles');
}

// 執行所有更新
function updatePageFonts() {
    console.log('開始更新頁面字體...');
    addFontLink();
    addFontStyles();
    setTimeout(() => {
        const count = addChineseFontToElements();
        console.log(`✅ 字體更新完成！共更新 ${count} 個中文元素`);
        console.log('請檢查頁面是否正確顯示 Chiron GoRound TC 字體');
    }, 1000); // 等待字體載入
}

// 執行更新
updatePageFonts();