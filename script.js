// 获取画布和绘图上下文
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 设置画布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义太阳系天体
const sun = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 50,
    color: 'yellow'
};

const planets = [
    {
        x: sun.x + 100,
        y: sun.y,
        radius: 10,
        color: 'blue',
        angle: 0,
        distance: 100,
        speed: 0.01
    },
    {
        x: sun.x + 200,
        y: sun.y,
        radius: 15,
        color: 'red',
        angle: 0,
        distance: 200,
        speed: 0.005
    }
];

// 绘制天体
function drawObject(object) {
    ctx.beginPath();
    ctx.arc(object.x, object.y, object.radius, 0, Math.PI * 2);
    ctx.fillStyle = object.color;
    ctx.fill();
}

// 更新行星位置
function updatePlanets() {
    planets.forEach(planet => {
        planet.angle += planet.speed;
        planet.x = sun.x + planet.distance * Math.cos(planet.angle);
        planet.y = sun.y + planet.distance * Math.sin(planet.angle);
    });
}

// 游戏循环
function gameLoop() {
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制太阳
    drawObject(sun);

    // 更新行星位置
    updatePlanets();

    // 绘制行星
    planets.forEach(planet => {
        drawObject(planet);
    });

    // 循环调用游戏循环
    requestAnimationFrame(gameLoop);
}

// 启动游戏循环
gameLoop();
