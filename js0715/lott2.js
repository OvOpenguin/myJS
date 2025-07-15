
// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNo = document.getElementById("secNo");
// 存放號碼的陣列
let arrLott = [];

// 呼叫函式
function lott(tp, max, sec) {
    if (tp === 1) {
        // alert("威力彩");
        // 第一區：1-38取6個
        // 建立存放號碼的空陣列
        // let lott = [];

        // while

        while (1) {
            // 檢查是已經有6個號碼
            if (lott.length == 6) {
                break;
            }
            getNo(max);
            // // 亂數取號碼
            // let lottNo = Math.floor(Math.random() * max) + 1;
            // // 檢查是否重覆
            // if (!lott.includes(lottNo)) {   // 沒有重覆
            //     lott.push(lottNo);  // 增加號碼到陣列中            
            // }
        }

        // 未排序
        sortBefore.textContent = "排序前號碼:" + lott;
        // 排序
        lott.sort((a, b) => {
            return a - b;
        })
        sortAfter.textContent = "排序後號碼:" + lott;
        // 第二區：1-8取1個
        secNo.textContent = "第二區號碼:" + (Math.floor(Math.random() * sec) + 1);

    } else if (tp === 2) {
        // alert("大樂透");
        // 第一區：1-49取6個
        // 建立存放號碼的空陣列
        let lott = [];

        // while

        while (1) {
            // 檢查是否已經有7個號碼
            if (lott.length == 7) {
                break;
            }

            // 亂數取號碼
            let lottNo = Math.floor(Math.random() * max) + 1;
            // 檢查是否重覆
            if (lott.includes(lottNo) == false) {   // 沒有重覆
                lott.push(lottNo);  // 增加號碼到陣列中            
            }
        }

        // .pop() 取出陣列最後一個值後，並移除
        secNo.textContent = "特別號：" + lott.pop();

        // 未排序
        sortBefore.textContent = "排序前號碼:" + lott;
        // 排序
        lott.sort((a, b) => {
            return a - b;
        })
        sortAfter.textContent = "排序後號碼:" + lott;

    } else if (tp === 3) {
        // alert("今彩539");
        // 第一區：1-39取5個
        // 建立存放號碼的空陣列
        let lott = [];

        // while

        while (1) {
            // 檢查是已經有5個號碼
            if (lott.length == 5) {
                break;
            }

            // 亂數取號碼
            let lottNo = Math.floor(Math.random() * max) + 1;
            // 檢查是否重覆
            if (lott.includes(lottNo) == false) {   // 沒有重覆
                lott.push(lottNo);  // 增加號碼到陣列中            
            }
        }

        // 未排序
        sortBefore.textContent = "排序前號碼:" + lott;
        // 排序
        lott.sort((a, b) => {
            return a - b;
        })
        sortAfter.textContent = "排序後號碼:" + lott;

        // 今彩沒有第二區，所以清除
        secNo.textContent = "";
    }
}


function getNo(max){
    // 亂數取號碼
    let lottNo = Math.floor(Math.random() * max) + 1;
    // 檢查是否重覆
    if (!arrLott.includes(lottNo)) {   // 沒有重覆
        arrLott.push(lottNo);  // 增加號碼到陣列中            
    }
}