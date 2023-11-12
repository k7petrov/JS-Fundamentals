function partyTime(input) {
    let invitedList = input.splice(0, input.indexOf("PARTY"));
    input.splice(0, 1);
    let vip = [];
    let regular = [];
    for (let guest of invitedList) {
        if (guest[0] >= '0' && guest[0] <= '9') {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }
    for (let guest of input) {
        if (vip.includes(guest)) {
            vip.splice(vip.indexOf(guest), 1);
        }
        if (regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }
    console.log(vip.length + regular.length);
    vip.forEach((x) => console.log(x));
    regular.forEach((x) => console.log(x));
}