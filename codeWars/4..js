const array = ["1", "2", "3", "4", 5];

function check(a, x) {
	a.forEach((element) => {
		if (element != x) {
			element++;
		} else {
			return true;
		}
		return false;
	});
}
check(array, 3);
