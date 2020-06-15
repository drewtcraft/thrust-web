function polyfillRect (a, b) {
	const points = [];
	const xRange = b.x - a.x;
	const yRange = b.y - a.y;
	for (let x = 0; x < xRange; x++) {
		for (let y = 0; y < yRange; y++) {
			points.push({
				x: a.x + x,
				y: a.y + y,
			});
		}
	}
	return points;
}

export default function (n) {
	const states = [[]];

	// fill first state with a straight up square
	polyfillRect({ x: 100, y: 100 }, { x: 200, y: 200}).forEach(p => {
		states[0].push({
			point: p,
			color: 'black',
		});
	});

	console.log(states)

	for (let i = 0; i < n; i++) {
			states[i + 1] = [];
			// fill next state with a move
			polyfillRect({ x: 100, y: 100 + i + 1 }, { x: 200, y: 200 + i + 1 }).forEach(p => {
				states[i + 1].push({
					point: p,
					color: 'black',
				});

			});

			// another layer on second state to clear previous row
			polyfillRect({ x: 100, y: 100 + i }, { x: 200, y: 100 + i + 1 }).forEach(p => {
				states[i + 1].push({
					point: p,
					color: null,
				});
			});
	}


	return states;

}
