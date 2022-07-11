function summation(num) {
	let i = 1;
	for (let ii = 2; ii <= num; ii++) {
		i += ii;
	}
	return i;
}

summation(4);
