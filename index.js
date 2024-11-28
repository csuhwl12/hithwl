// 修改后的代码
const canvas = document.getElementById('wholeFactoryBackGround');
const ctx = canvas.getContext('2d');
let divElements=document.getElementById('workStationShowInfo');
let turnTitle=document.getElementById('turnInfoTitle');
const turntileh3 = document.getElementById('turnInfoTitle');
let highLightData = document.getElementById('highLight');
// 确保图片路径正确
const backGroundImg = new Image();
backGroundImg.src = 'img/厂房整体渲染1080P_trans60.png';

// 建立轮播图片数组
let currentIndex = 0;
const images = [
    {src: 'img/danDaoZongZhuang.png'},
    {src: 'img/zhuangPeiJiCheng.png'},
    {src: 'img/质测工位.png'},
    {src:'img/精测工位.png'},
    {src:'img/装配测试集成工位.png'},
    {src:'img/太阳翼工位.png'},
    {src:'img/出厂前综合测试.png'},
    {src:'img/EMC试验.png'},
    {src:'img/真空热试验.png'},
    {src:'img/力学试验.png'},
    {src:'img/卫星检漏测试.png'}
];

const positionArray=[[50,23],[63,31],[73,36],[67,40],[53,32.5],[64,50],[52,39],[44,37],[63,61.5],[43,57],[39,52]];//记录不同块所处的位置
turnTitleArray=['单板总装','整星集成','质量特性测量','卫星精度测试','整星装配测试','太阳翼集成测试','出厂前综合测试','EMC试验','真空热试验','力学试验','卫星检漏测试'];
//左侧工位信息总览中对应岛位的高亮块，数据存储的分别为：top,height
const highlightLocation = [[12.4,8.5],[21.4,4.1],[36.25,2.05],[34.2,2.05],[25.5,8.5],[40.7,6.3],[54,4.2],[47.5,2.1],[49.4,2.1],[47.3,2.1],[38.5,2.1]];

//记录表格信息的标题36.25,2.05


// 预加载所有图片
const loadedImages = images.map(img => {
    const image = new Image();
    image.src = img.src;
    return image;
});

// 先绘制背景图片
backGroundImg.onload = function() {
    ctx.drawImage(backGroundImg, 0, 0, canvas.width, canvas.height);

    // 开始轮播
    setInterval(() => {
        // 清除上一帧内容
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 重绘背景
        ctx.drawImage(backGroundImg, 0, 0, canvas.width, canvas.height);
        // 绘制当前轮播图片
        ctx.drawImage(loadedImages[currentIndex], 0, 0, canvas.width, canvas.height);
        //同时更新div说明块的地址值

        divElements.style.bottom=positionArray[currentIndex][0]+'%';
        divElements.style.left=positionArray[currentIndex][1]+'%';
        highLightData.style.top=highlightLocation[currentIndex][0]+'rem';
        highLightData.style.height=highlightLocation[currentIndex][1]+'rem';

        //更新信息表格标题
        turnTitle.textContent = turnTitleArray[currentIndex];

        // 更新索引
        currentIndex = (currentIndex + 1) % loadedImages.length;
        //图标伴随轮播

    }, 2000);
};