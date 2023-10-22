function angryCat(arr, entry, type) {
    let rating = arr[entry];
    let leftSum = 0
    let rightSum = 0;

    if (type == 'cheap') {
        leftSum = arr.slice(0, entry).filter(x => x < rating).reduce((acc, val) => acc + val, 0);
        rightSum = arr.slice(entry + 1,).filter(x => x < rating).reduce((acc, val) => acc + val, 0);
        
    } else {
        leftSum = arr.slice(0, entry).filter(x => x >= rating).reduce((acc, val) => acc + val, 0);
        rightSum = arr.slice(entry + 1,).filter(x => x >= rating).reduce((acc, val) => acc + val, 0);
    }

    leftSum >= rightSum ? console.log(`Left - ${leftSum}`) : console.log(`Right - ${rightSum}`)
}

angryCat([1, 5, 1], 1, "cheap");
angryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");