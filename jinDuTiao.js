function calculateProgress(startDate, targetDate) {
    const now = new Date();
    const start = new Date(startDate);
    const target = new Date(targetDate);
    // 计算时间差(毫秒)
    const timeDiff = now.getTime()-start.getTime();

    // 计算总时间差
    const totalTime = target.getTime() - start.getTime();

    var progressPercentage =Math.round((timeDiff / totalTime) * 100) ;

    // 确保百分比在0-100之间
    if(progressPercentage < 0){
        progressPercentage = 100;
    }
    else if(progressPercentage > 100){
        progressPercentage = 100;
    }
    return progressPercentage;
}
const startTime = ['2023-10-1 0:0:0','2023-10-1 0:0:0','2024-10-7 0:0:0','2024-10-7 0:0:0','2024-10-7 0:0:0','2024-10-7 0:0:0','2024-10-7 0:0:0','2024-9-30 0:0:0','2024-9-30 0:0:0'];
const endTime=['2024-11-1 0:0:0','2024-11-7 0:0:0','2025-3-28 0:0:0','2025-3-28 0:0:0','2025-5-28 0:0:0','2025-5-28 0:0:0','2025-6-28 0:0:0','2024-12-3 0:0:0','2024-12-3 0:0:0'];
const progressValues = [100, 100, 30, 30, 20, 0, 100, 100];

function initializeProgressBars() {
    for (let i = 1; i <= 9; i++) {
        progressValues[i-1] = calculateProgress(startTime[i-1], endTime[i-1]); // 修正:使用i-1作为数组索引
        const progressBar = document.getElementById(`progressBar${i}`);
        const progressText = document.getElementById(`progressText${i}`);

        if (progressBar && progressText) {
            const percentage = progressValues[i-1];
            progressBar.style.width = percentage + '%';
            progressText.textContent = percentage.toFixed(2) + '%';
        }
    }
}
//添加新增的两个型号 ，不涉及时间
const progressBar=document.getElementById(`progressBar${10}`);
const progressText=document.getElementById(`progressText${10}`);
progressBar.style.width = 100 + '%';
progressText.textContent = 100 + '%';
progressText.verticalAlign='middle';

const progressBar1=document.getElementById(`progressBar${11}`);
const progressText1=document.getElementById(`progressText${11}`);
progressBar1.style.width = 0 + '%';
progressText1.textContent = 0 + '%';
progressText.verticalAlign='middle';
//计算倒计时
function calculateCountdown(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    const timeDiff = target.getTime() - now.getTime();

    // 转换为天和小时
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return {
        days: days,
        hours: hours
    };
}

function updateCountdowns() {
    for (let i = 1; i <= 9; i++) {
        const countdownElement = document.getElementById(`countdown${i}`);
        if (countdownElement) {
            const countdown = calculateCountdown(endTime[i-1]);
            if (countdown.days < 0) {
                countdownElement.textContent = "已结束";
            } else {
                countdownElement.textContent = `${countdown.days}天${countdown.hours}时`;
            }
        }
    }
}

// 初始更新倒计时
updateCountdowns();

// 每小时更新一次倒计时
setInterval(updateCountdowns, 3600000);


// 页面加载完成后初始化进度条
window.addEventListener('load', initializeProgressBars);
