import LBlock from './lBlock.js';
import Square from './square.js';
import RLBlock from './rLBlock.js';
import TBolck from './tBolck.js';
import Swagerly from './swagerly.js';
import RSwagerly from './rSwagerly.js';
import LinePiece from './linePiece.js';

class Shapes {
	constructor() {
		this.shapesArr = [
			LBlock,
			Square,
			RLBlock,
			TBolck,
			Swagerly,
			RSwagerly,
			LinePiece
		];
		this.fulfiledLines = new Set();
		this.score = 0;
		this.gameOver = false;
	}
}
Shapes.prototype.generateShape = function(gameData, gameDivs) {
	if (this.gameOver) return;
	if (this.curShape) clearInterval(this.curShape.timer);
	this.curShape = new (this.shapesArr[Math.floor(Math.random() * 7)])();
	if (this.downable(gameData)) {
		this.curShape.timer = setInterval(() => {
			this.goDown(gameData, gameDivs);
		}, 500);
	} else {
		this.gameOver = true;
		document.querySelector('.gameover').classList.add('show-gameover');
		clearInterval(this.curShape.timer);
		this.updateData(this.curShape.data, gameData, gameDivs);
	}
};
Shapes.prototype.refreshGame = function(gameData, gameDivs) {
	for (let i = 0; i < gameData.length; i++) {
		for (let j = 0; j < gameData[0].length; j++) {
			switch (gameData[i][j]) {
			case 0:
				gameDivs[i][j].className = 'none';
				break;
			case 1:
				gameDivs[i][j].className = 'done';
				break;
			case 2:
				gameDivs[i][j].className = 'current';
				break;
			default:
			}
		}
	}
};
Shapes.prototype.clearBefore = function(gameData) {
	const curData = this.curShape.data;
	for (let i = 0; i < curData.length; i++) {
		for (let j = 0; j < curData[0].length; j++) {
			gameData[i + this.curShape.origin.x][j + this.curShape.origin.y] = 0;
		}
	}
};
Shapes.prototype.rotateShape = function(gameData, gameDivs) {
	this.curShape.dir = (this.curShape.dir + 1) % 4;
	if (this.rotatable(this.curShape.rotate[this.curShape.dir], gameData)) {
		this.clearBefore(gameData);
		this.curShape.data = this.curShape.rotate[this.curShape.dir];
		for (let i = 0; i < this.curShape.data.length; i++) {
			for (let j = 0; j < this.curShape.data[0].length; j++) {
				gameData[i + this.curShape.origin.x][j + this.curShape.origin.y] = this.curShape.data[i][j];
			}
		}
		this.refreshGame(gameData, gameDivs);
	}
};
Shapes.prototype.downable = function(gameData) {
	const curData = this.curShape.data;
	for (let i = 0; i < curData.length; i++) {
		if (i + this.curShape.origin.x === gameData.length - 1) {
			this.settleData(curData, gameData);
			return false;
		}
		for (let j = 0; j < curData[0].length; j++) {
			if (gameData[i + this.curShape.origin.x + 1][j + this.curShape.origin.y] === 1) {
				if (curData[i][j] === 2) {
					this.settleData(curData, gameData);
					return false;
				}
			}
		}
	}
	return true;
};
Shapes.prototype.leftable = function() {
	const curData = this.curShape.data;
	for (let i = 0; i < curData.length; i++) {
		for (let j = 0; j < curData[0].length; j++) {
			if (j + this.curShape.origin.y < 1) return false;
		}
	}
	return true;
};
Shapes.prototype.rightable = function(gameData) {
	const curData = this.curShape.data;
	for (let i = 0; i < curData.length; i++) {
		for (let j = 0; j < curData[0].length; j++) {
			if (j + this.curShape.origin.y >= gameData[0].length - 1) return false;
		}
	}
	return true;
};
Shapes.prototype.rotatable = function(nextDirData, gameData) {
	for (let i = 0; i < nextDirData.length; i++) {
		if (i + this.curShape.origin.x >= gameData.length - 1) return false;
		for (let j = 0; j < nextDirData[0].length; j++) {
			if (j + this.curShape.origin.y >= gameData[0].length - 1) return false;
			if (j + this.curShape.origin.y < 1) return false;
		}
	}
	return true;
};
Shapes.prototype.updateData = function(curData, gameData, gameDivs) {
	for (let i = 0; i < curData.length; i++) {
		for (let j = 0; j < curData[0].length; j++) {
			gameData[i + this.curShape.origin.x][j + this.curShape.origin.y] = curData[i][j];
		}
	}
	this.refreshGame(gameData, gameDivs);
};
Shapes.prototype.settleData = function(curData, gameData) {
	for (let i = 0; i < curData.length; i++) {
		for (let j = 0; j < curData[0].length; j++) {
			if (gameData[i + this.curShape.origin.x][j + this.curShape.origin.y] === 2) {
				gameData[i + this.curShape.origin.x][j + this.curShape.origin.y] = 1;
			}
		}
	}
	this.removeFulfiled(gameData);
};
Shapes.prototype.goDown = function(gameData, gameDivs) {
	if (this.downable(gameData)) {
		this.clearBefore(gameData);
		this.curShape.origin.x++;
		this.updateData(this.curShape.data, gameData, gameDivs);
	} else {
		this.generateShape(gameData, gameDivs);
	}
};
Shapes.prototype.goLeft = function(gameData, gameDivs) {
	if (this.leftable(gameData)) {
		this.clearBefore(gameData);
		this.curShape.origin.y--;
		this.updateData(this.curShape.data, gameData, gameDivs);
	}
};
Shapes.prototype.goRight = function(gameData, gameDivs) {
	if (this.rightable(gameData)) {
		this.clearBefore(gameData);
		this.curShape.origin.y++;
		this.updateData(this.curShape.data, gameData, gameDivs);
	}
};
Shapes.prototype.removeFulfiled = function(gameData) {
	for (let i = 0; i < gameData.length; i++) {
		if (gameData[i].every(item => item === 1)) {
			this.fulfiledLines.add(i);
		}
	}
	if (this.fulfiledLines.size) {
		for (const item of this.fulfiledLines) {
			gameData.splice(item, 1);
			gameData.splice(0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
			this.score++;
			document.querySelector('.score').innerHTML = this.score;
		}
		this.fulfiledLines.clear();
	}
};

export default Shapes;