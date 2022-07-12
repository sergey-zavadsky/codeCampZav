function multiplyAll(arr) {
	let product = 1;
	// Only change code below this line
	let c;
	let d = [];
	for (let i = 0; i < arr.length; i++) {
		for (let b = 0; b < arr.length; b++) {
			if (arr[i][b]) {
				c = arr[i][b];
				d.push(c);
			}
		}
	}
	for (let i = 0; i < d.length; i++) {
		product *= d[i];
	}
	// Only change code above this line
	return product;
}

multiplyAll([
	[1, 2],
	[3, 4],
	[5, 6, 7],
]);
