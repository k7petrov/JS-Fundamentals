function phoneBook(arr) {

    let book = {};

    for (let el of arr) {
        let info = el.split(' ');
        let name = info.shift();
        let num = info.shift();

        book[name] = num;
    }

    for (let key in book) {
        console.log(`${key} -> ${book[key]}`)
    }
}