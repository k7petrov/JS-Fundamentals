function reverse(n, array) {

    let revArr = []

    for (let i = n; i > 0; i--) {
        revArr.push(array[i - 1])
    }

    console.log(revArr.join(` `))
}

reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);