function party(arr) {

    let list = [];

    for (let el of arr) {

        let command = el.split(' ');
        let name = command[0];

        if (command.includes('not')) {
            if (list.includes(name)) {
                let index = list.indexOf(name);
                list.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (!list.includes(name)) {
                list.push(name);

            } else {
                console.log(`${name} is already in the list!`)

            }

        }
    }
    console.log(list.join('\n'));

}