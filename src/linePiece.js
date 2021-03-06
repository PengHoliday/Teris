class LinePiece {
	constructor() {
         // 当前数据为旋转数组中的第一个
		this.data = [
			[2, 2, 2, 2]
		];
        // 保存旋转90度、180度、279度、360度后的数据
		this.rotate = [
			[
                [2, 2, 2, 2]
			],
			[
                [2],
                [2],
                [2],
                [2]
			],
			[
                [2, 2, 2, 2]
			],
			[
                [2],
                [2],
                [2],
                [2]
			],
		];
        // 记录当前旋转数组索引
		this.dir = 0;
        // 记录移动的距离
		this.origin = {
			x: 0,
			y: 0
		};
        // 用来给每一个实例保存定时下落的计时器
		this.timer = null;
	}
}
export default LinePiece;
