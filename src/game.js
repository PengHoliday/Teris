import Shapes from './shapes.js';
// import './index.css';
// 游戏区域数组
const gameData = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// 游戏区域DOM
const gameDivs = [];

// 根据游戏区域数组创建并插入DOM
for (let i = 0; i < gameData.length; i++) {
	const gameDiv = [];
	for (let j = 0; j < gameData[0].length; j++) {
		const newNode = document.createElement('div');
		newNode.className = 'none';
		newNode.style.top = (i * 20) + 'px';
		newNode.style.left = (j * 20) + 'px';
		document.querySelector('#game').appendChild(newNode);
		gameDiv.push(newNode);
	}
	gameDivs.push(gameDiv);
}
// 创建方块实例并运行
const shapes = new Shapes();
shapes.generateShape(gameData, gameDivs);
// 绑定键盘事件
document.addEventListener('keydown', e => {
	if (e.keyCode === 37) {
		shapes.goLeft(gameData, gameDivs);
	}
	if (e.keyCode === 39) {
		shapes.goRight(gameData, gameDivs);
	}
	if (e.keyCode === 40) {
		shapes.goDown(gameData, gameDivs);
	}
	if (e.keyCode === 32) {
		shapes.rotateShape(gameData, gameDivs);
	}
}, false);
