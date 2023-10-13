function nonDecreasing(arr) {

    let n = arr[0];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let current = Number(arr[i]);
        if (current >= n) {
            n = current;
            result.push(current)
        }
    }
    console.log(result.join(' '));
}

nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasing([20, 3, 2, 15, 6, 1]);
