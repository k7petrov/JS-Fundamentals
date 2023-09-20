function pyramid(base, increment) {

    let stones = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 1;

    while (base > 2) {

        if (steps % 5 == 0) {
            lapis += (base * 4 - 4) * increment;
        } else {
            marble += (base * 4 - 4) * increment;
        }

        base -= 2;
        stones += base * base * increment;
        steps++;
    }

    if (base == 2) {
        gold = base * 2 * increment;
    } else {
        gold = increment;
    }

    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}