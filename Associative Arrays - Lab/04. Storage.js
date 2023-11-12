function storage(arr) {

    let myStorage = {};

    for (let item of arr) {
        let [product, quantity] = item.split(' ');

        let sameProduct = myStorage.hasOwnProperty(product);

        if (sameProduct) {
            myStorage[product] = (Number(myStorage[product]) + Number(quantity));
        } else {
            myStorage[product] = quantity
        }
    }

    for (let item in myStorage) {
        console.log(`${item} -> ${myStorage[item]}`)
    }
}