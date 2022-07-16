function randomRange(myMin, myMax) {
	// Only change code below this line
	let value = Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
	console.log(`myMin=${myMin} + myMax=${myMax}=${value}`);
	return value;
	// Only change code above this line
}

//randomRange(0, 10)
