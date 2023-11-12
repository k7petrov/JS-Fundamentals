function solve(arr) {

    let players = {};

    for (let el of arr) {
        let [playerName, cards] = el.split(': ');
        cards = cards.split(', ');
        
        if (players.hasOwnProperty(playerName)) {

            players[playerName].push(...cards);
            
        } else {
            players[playerName] = cards;
        }
    }

    for (let [name, cards] of Object.entries(players)) {

        let set = new Set(cards);
        let sum = 0;

        for (let entry of set) {

            let power = entry[0];
            let multiplayer = ''

            if (power == '1') {
                power = 10;
                multiplayer = entry[2];
            } else {
                multiplayer = entry[1];
            }


            if (power >= 2) {
                power = Number(power)
            } else if (power == 'J') {
                power = 11;
            } else if (power == "Q") {
                power = 12;
            } else if (power == 'K') {
                power = 13;
            } else {
                power = 14;
            }

            if (multiplayer == 'S') {
                multiplayer = 4;
            } else if (multiplayer == 'H') {
                multiplayer = 3;
            } else if (multiplayer == 'D') {
                multiplayer = 2;
            } else {
                multiplayer = 1;
            }

            sum += power * multiplayer;

        }

        console.log(`${name}: ${sum}`);
    }
}