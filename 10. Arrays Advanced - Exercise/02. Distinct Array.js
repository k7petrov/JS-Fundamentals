function distinct(arr) {

    let result = [];
    let count = 0;

    for (let el of arr) {
        if (result.includes(el)) {
        } else {
            result.push(el)
        }
    }

    console.log(result.join(' '));

}