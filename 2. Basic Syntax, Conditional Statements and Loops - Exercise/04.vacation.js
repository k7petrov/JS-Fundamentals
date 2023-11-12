function vacation(people, group, day) {

    let price = 0;

    if (group == 'Students') {
        if (day == 'Friday') {
            price = people * 8.45;
        } else if (day == 'Saturday') {
            price = people * 9.8;
        } else {
            price = people * 10.46
        }

        if (people >= 30) {
            price -= price * 0.15
        }

    } else if (group == 'Business') {

        if (people >= 100) {
            people -= 10
        }

        if (day == 'Friday') {
            price = people * 10.9;
        } else if (day == 'Saturday') {
            price = people * 15.6;
        } else {
            price = people * 16
        }

    } else {

        if (day == 'Friday') {
            price = people * 15;
        } else if (day == 'Saturday') {
            price = people * 20;
        } else {
            price = people * 22.5
        }

        if (people >= 10 && people <= 20) {
            price -= price * 0.05
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`)
}