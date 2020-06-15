import stateMaker from './state-maker.js';


const d = document;

const PIXEL_SIZE = 2;

(function () {
	const canvas = d.querySelector('canvas');
	canvas.height = 800;
	canvas.width = 800;
	console.log(canvas.height, canvas.width);
	const ctx = canvas.getContext('2d');

	// canvas default has (0, 0) in upper left
	// this inverts it so it is bottom left (aka normal)
	ctx.transform(1, 0, 0, -1, 0, canvas.height);

	// if we do not have a color, we clear that square
	// if we do, we draw a pixel
	function handlePixel (coord, color) {
		let method;
		if (!color) method = 'clearRect'; 
		else {
			ctx.fillStyle = color;
			if (Math.random() > 0.7) ctx.fillStyle = 'red';
			method = 'fillRect';
		}
		if (method == 'clearRect') console.log('ok');
		ctx[method](
			PIXEL_SIZE * coord.x - (PIXEL_SIZE / 2), 
			PIXEL_SIZE * coord.y - (PIXEL_SIZE / 2), 
			PIXEL_SIZE, 
			PIXEL_SIZE);
	}
	ctx.fillStyle='black'
	ctx.fillRect(200, 10, 100, 100);

	const states = stateMaker(50);
	console.log(states)
	function renderState (state) {
		state.forEach(p => {
			handlePixel(p.point, p.color);
		});
	}
	states.forEach((s, i) => {
		setTimeout(() => renderState(s), 100 * i);
	});

	// need some array of game state diffs
})();
