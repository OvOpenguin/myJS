
// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secShow = document.getElementById("secNo");

// 彩票
// getlott(類型,第一區最大值,第一區取幾個號碼,第二區最大值)
function getlott(tp, firstMax, firstNo, secMax) {
    // 第一區：1-38取6個
    // 建立存放號碼的空陣列
    let lott = [];

    if (tp == 2) {
        firstNo = firstNo + 1;
    }

    while (1) {
        // 第一區
        // 是否為大樂透，若是，則總數+1，作為特別號。
        // 檢查是已經有 N 個號碼
        if (lott.length == firstNo) {
            break;
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * firstMax) + 1;
        // 檢查是否重覆
        if (!lott.includes(lottNo)) {   // 沒有重覆
            lott.push(lottNo);  // 增加號碼到陣列中            
        }
    }


    // 第二區
    secShow.textContent = "";
    if (tp == 1) {
        secShow.textContent = "第二區號碼:" + (Math.floor(Math.random() * secMax) + 1);
    } else if (tp == 2) {
        secShow.textContent = "特別號：" + lott.pop();
    }

    // 第二區 (test)
    // if (tp === 1) {
    //     // 第二區：1-8取1個
    //     secShow.textContent = "第二區號碼:" + (Math.floor(Math.random() * secMax) + 1);
    // } else if (tp === 2) {
    //     // 取出陣列最後一個值後，並移除
    //     secShow.textContent = "特別號：" + lott.pop();

    // } else if (tp === 3) {
    //     // 今彩沒有第二區，所以清除
    //     secShow.textContent = "";
    // }

    // 未排序
    sortBefore.textContent = "排序前號碼:" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼:" + lott;

}
