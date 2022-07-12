function multiplyAll(arr) {
	let product = 1;
	for (let i = 0; i < arr.length; i++) {
		for (let b = 0; b < arr[i].length; b++) {
			product = product * arr[i][b];
		}
	}
	console.log(product);
	return product;
}

multiplyAll([
	[1, 2],
	[3, 4],
	[5, 6, 7],
]);

// function multiplyAll(arr) {
// 	let product = 1;
// 	let c;
// 	let d = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let b = 0; b < arr.length; b++) {
// 			if (arr[i][b]) {
// 				c = arr[i][b];
// 				d.push(c);
// 			}
// 		}
// 	}
// 	for (let i = 0; i < d.length; i++) {
// 		product *= d[i];
// 	}
// 	return product;
// }
