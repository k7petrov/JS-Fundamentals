function solve(str, word) {
    
    let count = 0;
    let strArr = str.split(' ');
    for (let el of strArr) {
        if (el == word) {
            count++;
        }
    }

    console.log(count);
}