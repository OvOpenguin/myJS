
// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNo = document.getElementById("secNo");

// 威力彩
function lott1() {
    // 第一區號碼：1-38取6個
    // 建立存放號碼的陣列
    let lott = [];

    // 第一個號碼
    let lottNo = Math.floor(Math.random() * 38) + 1;
    lott.push(lottNo);
    console.log(lott);

    // 第二個號碼之後，每個號碼都要檢查是否重複。
    for (let i = 1; i <= 5; i++) {
        // 亂數取號碼
        lottNo = Math.floor(Math.random() * 38) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo) == false) { // 沒有重複
            lott.push(lottNo); // 增加新號碼到陣列中
        } else {
            i--;  //當號碼重複時，這次的執行次數不算，所以要倒減回來
        }
    }
    // 未排序
    sortBefore.textContent = "排序前的號碼：" + lott
    lott.sort((a, b) => {
        return a - b;
    });
    // 排序
    sortAfter.textContent = "排序後的號碼：" + lott

    // 第二區號碼：1-8取1個
    secNo.textContent = "第二區號碼：" + (Math.floor(Math.random() * 8) + 1);
}

// 大樂透
function lott2() {
    // 第一區號碼：1-49取6個
    // 建立存放號碼的陣列
    let lott = [];

    // while
    while (1) {
        if (lott.length == 6) {
            break;
        }

        // 取亂數
        let lottNo = Math.floor(Math.random() * 49) + 1;
        if (lott.includes(lottNo) == false) {
            lott.push(lottNo);
        }
    }
    // 未排序
    sortBefore.textContent = "排序前的號碼：" + lott
    lott.sort((a, b) => {
        return a - b;
    });
    // 排序
    sortAfter.textContent = "排序後的號碼：" + lott

    // 第二區號碼：1-49取1個 (不能與第一區重複)
    while (1) {
        // 取亂數
        let lottNo2 = Math.floor(Math.random() * 49) + 1;
        if (lott.includes(lottNo2) == false) {  // false代表在第一區lott陣列中，沒有和 lottNo2 一樣的數字
            secNo.textContent = "特別號：" + lottNo2; 
            break; 
        }
    }
}

// 今彩539
function lott3() {
    // 第一區號碼：1-39取5個
    // 建立存放號碼的陣列
    let lott = [];

    // while
    while (1) {
        if (lott.length == 5) {
            break;
        }

        // 取亂數
        let lottNo = Math.floor(Math.random() * 39) + 1;
        if (lott.includes(lottNo) == false) {
            lott.push(lottNo);
        }
    }
    // 未排序
    sortBefore.textContent = "排序前的號碼：" + lott
    lott.sort((a, b) => {
        return a - b;
    });
    // 排序
    sortAfter.textContent = "排序後的號碼：" + lott

    // 今彩539沒有第二區，所以要清除，等於空字串即可。
    secNo.textContent="";
}
