function meetings(arr) {

    let meets = {};

    for (let el of arr) {
        let [day, name] = el.split(' ');

        let collision = meets.hasOwnProperty(day)
        
        if (collision) {
            console.log(`Conflict on ${day}!`);
        } else {
            meets[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in meets) {
        console.log(`${key} -> ${meets[key]}`)
    }
}