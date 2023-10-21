function train(arr) {
	
	let wagons = arr[0].split(' ');
	let max = Number(arr[1]);
	
	for (let i = 2; i < arr.length; i++) {
		let current = arr[i].split(' ');
		if (current.length > 1) {
	let		passengers = Number(current[1]);
			wagons.push(passengers);
		} else {
			for (let w = 0; w < wagons.length; w++) {
				let passengers = Number(current[0]);
				let wagonPassengers = Number(wagons[w]);
				if (passengers + wagonPassengers <= max) {
					wagons[w] = String(passengers + wagonPassengers);
					break;
				}
			}
		}
	}
	
	console.log(wagons.join(' '));
}