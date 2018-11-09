class RSwagerly {
	constructor() {
		this.data = [
			[0, 2, 2],
			[2, 2, 0]
		];
		this.rotate = [
			[
				[0, 2, 2],
				[2, 2, 0]
			],
			[
				[2, 0],
				[2, 2],
				[0, 2],
			],
			[
				[0, 2, 2],
				[2, 2, 0]
			],
			[
				[2, 0],
				[2, 2],
				[0, 2],
			],
		];
		this.dir = 0;
		this.origin = {
			x: 0,
			y: 0
		};
		this.timer = null;
	}
}
export default RSwagerly;