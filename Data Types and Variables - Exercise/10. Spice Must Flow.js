function mine(startYield) {

    let total = 0;
    let days = 0;

    while (startYield >= 100) {
        days++;
        total += startYield;
        if (total >= 26) {
            total -= 26;
        } else {
            total = 0;
        }
        startYield -= 10
    }

    if (total >= 26) {
        total -= 26;
    } else {
        total = 0;
    }
    console.log(days)
    console.log(total)
}

mine(2323)