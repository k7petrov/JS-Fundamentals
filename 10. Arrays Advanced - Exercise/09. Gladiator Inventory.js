function gladiator(arr) {

    let inventory = arr.shift().split(' ');

    for (let el of arr) {
        let command = el.split(' ');
        let action = command.shift();
        let item = command.shift();

        if (action == 'Buy' && !inventory.includes(item)) {
            inventory.push(item);
        } else if (action == 'Trash' && inventory.includes(item)) {
            inventory.splice(inventory.indexOf(item), 1);
        } else if (action == 'Repair' && inventory.includes(item)) {
            inventory.push(inventory.splice(inventory.indexOf(item), 1).join(''));
        } else if (action == 'Upgrade') {
            item = item.split('-');
            if (inventory.includes(item[0])) {
                let index = inventory.indexOf(item[0]);
                inventory.splice(index + 1, 0, item.join(':'));
            }
        }
    }

    console.log(inventory.join(' '));
}