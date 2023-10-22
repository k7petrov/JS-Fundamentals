function huntingGames(input) {

    input = input.map(Number);

    let days = input.shift();
    let players = input.shift();
    let energy = input.shift();
    let water = input.shift() * players * days;
    let food = input.shift() * players * days;

    for (let i = 1; i <= input.length; i++) {

        let lostEnergy = input[i - 1]
        energy -= lostEnergy;

        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
            return;
        }

        if (i % 3 == 0) {

            energy *= 1.1;
            food = food - (food / players);

            if (i % 2 == 0) {
                energy *= 1.05;
                water *= 0.7;
            }

        } else if (i % 2 == 0) {

            energy *= 1.05;
            water *= 0.7;

        }
    }

    console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
}

huntingGames((["10",

    "7",

    "5035.5",

    "11.3",

    "7.2",

    "942.3", "500.57", "520.68", "540.87", "505.99", "630.3", "784.20", "321.21", "456.8", "330"]));

huntingGames((["12",

    "6",

    "4430",

    "9.8",

    "5.5",

    "620.3",

    "840.2",

    "960.1",

    "220",

    "340",

    "674",

    "365", "345.5", "212", "412.12", "258", "496"]));