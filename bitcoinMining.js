function bitcoins(input) {

    let oneGramOfGold = 67.51;
    let money = 0;
    let days = 0;
    let bitcoins = 0;
    let dayOfFirstBitcoin = 0;

    for (let i = 0; i <= input.length - 1; i++) {
        days++;


        if (days % 3 == 0) {
            money += (input[i] - input[i] * 0.3) * oneGramOfGold;
        } else {
            money += input[i] * oneGramOfGold;
        }


        while (money >= 11949.16) {
            bitcoins++;
            money -= 11949.16;
        }

        if (bitcoins > 0 && dayOfFirstBitcoin == 0) {
            dayOfFirstBitcoin = days;
        }

        if (money >= 11949.16) {
            i -= 1
            days -= 1
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if (dayOfFirstBitcoin != 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}