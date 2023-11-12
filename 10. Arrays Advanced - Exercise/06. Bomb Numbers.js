function bombNumbers(arr, bombs) {
    let bomb = bombs[0];
    let power = bombs[1];
    let sum = 0;
    let undestroyed = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == bomb) {
            for (let j = 0; j < power; j++) {
                undestroyed.pop();
            }
            i += power;

        } else {
            undestroyed.push(arr[i]);
        }

    }

    for (let num of undestroyed) {
        sum += num;
    }
    console.log(sum)
}

//bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
//bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 0]);
//bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);