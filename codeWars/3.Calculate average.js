function find_average(array) {
	if (array.length === 0 || array === NaN) {
		return 0;
	}

	const initialValue = 0;
	const sumWithInitial = array.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		initialValue,
	);
	return sumWithInitial / array.length;
}
