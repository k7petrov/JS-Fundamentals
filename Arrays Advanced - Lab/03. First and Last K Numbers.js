function firstAndLastKNumbers(arr) {

    let k = Number(arr[0]);
    let first = arr.slice(1, k + 1);
    let last = arr.slice(-k);

    console.log(first.join(' '));
    console.log(last.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9])