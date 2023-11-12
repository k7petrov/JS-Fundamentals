function solve(arr) {

    let words = arr.shift().split(' ');
    let occurrences = {};

    for (let item of words) {
        let count = arr.filter(x => x == item).length
        occurrences[item] = count;
    }

    let sorted = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);;
    
    for (let item of sorted) {
        console.log(`${item[0]} - ${item[1]}`)
    }
}