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

export default function () {
	const states: [[], []];

	// fill first state with a straight up square
	polyfillRect({ x: 100, y: 100 }, { x: 200, y: 200}).forEach(p => {
		states[0].push({
			point: p,
			color: 'black',
		});
	});

	// fill next state with a move
	polyfillRect({ x: 100, y: 101 }, { x: 200, y: 201 }).forEach(p => {
		states[1].push({
			point: p,
			color: 'black',
		});

	});

	// another layer on second state to clear previous row
	polyfillRect({ x: 100, y: 100, }, { x: 200, y: 100 }).forEach(p => {
		states[1].push({
			point: p,
			color: null,
		});
	});

	return states;

}
