function isDivideBy(number, a, b) {
	let c = number % a;
	let d = number % b;
	if (Math.abs(c) > 0 || Math.abs(d) > 0) {
		return false;
	}
	return true;
}

isDivideBy(-12, 2, -22);
isDivideBy(15, -5, 4);
