function rentalCarCost(d) {
	const oneDay = 40;
	const weekDiscount = 50;
	const threeDays = 20;

	if (d < 3) {
		return oneDay * d;
	}
	if (d > 2 && d < 7) {
		return oneDay * d - threeDays;
	}
	if (d > 6) {
		return oneDay * d - weekDiscount;
	}
}
