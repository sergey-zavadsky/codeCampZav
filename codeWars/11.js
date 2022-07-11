function fakeBin(x) {
	array = x.split("");
	newArr = [];
	array.forEach((element, index) => {
		if (element < 5) {
			newArr.push(0);
		} else newArr.push(1);
	});
	return newArr.join("");
}
