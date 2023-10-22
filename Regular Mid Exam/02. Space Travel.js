function spaceTravel(arr) {

    let ammunition = Number(arr.pop());
    let fuel = Number(arr.pop());
    let tokens = arr.join().split('||');

    for (let i = 0; i < tokens.length; i++) {

        let action = tokens[i].split(' ');
        let command = action.shift();
        let num = Number(action.shift());

        if (command == 'Travel') {
            fuel -= num;
            if (fuel >= 0) {
                console.log(`The spaceship travelled ${num} light-years.`)
            } else {
                console.log('Mission failed.');
                return;
            }

        } else if (command == 'Enemy') {
            if (ammunition >= num) {
                ammunition -= num;
                console.log(`An enemy with ${num} armour is defeated.`);
            } else if (fuel >= num * 2) {
                fuel -= num * 2;
                if (fuel >= 0) {
                    console.log(`An enemy with ${num} armour is outmaneuvered.`);
                }
            } else {
                console.log('Mission failed.');
                return;
            }
        } else if (command == 'Repair') {
            fuel += num;
            ammunition += num * 2;
            console.log(`Ammunitions added: ${num * 2}.`);
            console.log(`Fuel added: ${num}.`)
        } else if (command == 'Titan') {
            console.log('You have reached Titan, all passengers are safe.')
        }
    }
}

spaceTravel((['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']));
spaceTravel((['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100']));