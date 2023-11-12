function adressBook(arr) {

    let book = {};
    let bookArr = [];

    for (let el of arr) {
        let [name, address] = el.split(':');

        book[name] = address;
    }
   
    for (let entry in book) {
        bookArr.push(`${entry} -> ${book[entry]}`)
    }

    bookArr.sort((a, b) => a.localeCompare(b))

    for (let el of bookArr) {
        console.log(el)
    }
}