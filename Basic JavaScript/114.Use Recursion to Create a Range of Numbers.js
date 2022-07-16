function rangeOfNumbers(startNum, endNum) {
	if (startNum > endNum) {
		return [];
	} else {
		const arr = rangeOfNumbers(startNum, endNum - 1);
		arr.push(endNum);
		return arr;
	}
}

let startNum = 2;
let endNum = 5;

rangeOfNumbers(startNum, endNum);
