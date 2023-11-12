function employees(arr) {

    for (let el of arr) {
        let person = { name: el, number: el.length };
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])