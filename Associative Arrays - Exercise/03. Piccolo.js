function piccolo(arr) {

    let parking = {};

    for (let item of arr) {
        let tokens = item.split(', ');
        let command = tokens[0];
        let num = tokens[1];

        if (command == 'IN') {
            parking[num] = true;
        } else {
            delete parking[num];
        }
    }

    let cars = Object.keys(parking);

    if (cars.length < 1) {
        console.log('Parking Lot is Empty');
        return;
    }

    let sorted = cars.sort((a, b) => a.localeCompare(b));

    for (let car of cars) {
        console.log(car);
    }
}