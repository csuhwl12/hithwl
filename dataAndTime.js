// 获取用于显示日期和时间的DOM元素
const dateRow = document.querySelector('.date-row');
const timeRow = document.querySelector('.time-row');

// 函数用于更新日期和时间信息
function updateDateTime() {
    const now = new Date();

    // 获取年月日
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    // 获取星期几，数组中的值对应星期日到星期六
    const daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekday = daysOfWeek[now.getDay()];

    // 获取小时、分钟和秒
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 更新第一行的日期和星期几信息
    dateRow.textContent = `${year}年${month}月${day}日 ${weekday}`;

    // 更新第二行的北京时间信息
    timeRow.textContent = `${hours}:${minutes}:${seconds}`;
}

// 首次加载页面时更新日期和时间
updateDateTime();

// 每隔1秒更新一次时间，以实现实时显示
setInterval(updateDateTime, 1000);