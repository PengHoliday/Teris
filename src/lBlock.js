class LBlock {
	constructor() {
		this.data = [
			[2, 0, 0],
			[2, 2, 2]
		];
		this.rotate = [
			[
				[2, 0, 0],
				[2, 2, 2]
			],
			[
				[2, 2],
				[2, 0],
				[2, 0],
			],
			[
				[2, 2, 2],
				[0, 0, 2],
			],
			[
				[0, 2],
				[0, 2],
				[2, 2],
			]
		];
		this.dir = 0;
		this.origin = {
			x: 0,
			y: 0
		};
		this.timer = null;
	}
}
export default LBlock;