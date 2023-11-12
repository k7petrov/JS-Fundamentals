function manipulations(arr) {

    let result = arr[0].split(' ')
    arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let currentManipulation = arr[i].split(' ');
        let command = currentManipulation[0];
        let num = currentManipulation[1];

        if (command == 'Add') {
            result.push(num);
        } else if (command == 'Remove') {
            for (let j = 0; j < result.length; j++) {
                if (num == result[j]) {
                    result.splice(j, 1);
                }
            }
        } else if (command == 'RemoveAt') {
            result.splice(num, 1);
        } else {
            let index = currentManipulation[2];
            result.splice(index, 0, num)
        }
    }
    console.log(result.join(' '));
}


manipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);

