function list(arr) {

    let sortedByName = arr.sort();

    for (let i = 0; i < arr.length; i++) {
        let product = sortedByName[i]
        console.log(`${i + 1}.${product}`);
    }
}

list(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
