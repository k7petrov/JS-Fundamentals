function magicSum(array, sum) {

    for (let i = 0; i < array.length; i++) {
        let n1 = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let n2 = array[j];
            if (n1 + n2 == sum) {
                console.log(`${n1} ${n2}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6)
