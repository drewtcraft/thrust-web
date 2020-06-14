const d = document;

const PIXEL_SIZE = 2

function init () {
	const canvas = d.querySelector('canvas');
	const ctx = canvas.getContext('2d');

	// canvas default has (0, 0) in upper left
	// this inverts it so it is bottom left (aka normal)
	context.transform(1, 0, 0, -1, 0, canvas.height);

	// if we do not have a color, we clear that square
	// if we do, we draw a pixel
	function handlePixel (coord, color) {
		let method;
		if (!color) method = 'clearRect'; 
		else {
			ctx.fillStyle = color;
			method = 'fillRect';
		}
		ctx[method](
			coord.x - (PIXEL_SIZE / 2), 
			coord.y - (PIXEL_SIZE / 2), 
			PIXEL_SIZE, 
			PIXEL_SIZE);
	}

	// need some array of game state diffs
}
