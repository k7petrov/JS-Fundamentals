function oddNums(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            result.push((arr[i] * 2));
        }
    }
    console.log(result.reverse().join(' '));
}

oddNums([10, 15, 20, 25]);
oddNums([3, 0, 10, 4, 7, 3]);

function oddNums2(arr) {
    console.log(arr.filter((x, i) => i % 2 != 0).map(x => x * 2).reverse().join(' '));
}

oddNums2([10, 15, 20, 25]);