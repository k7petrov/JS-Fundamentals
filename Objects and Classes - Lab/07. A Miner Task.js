function minerTask(arr) {

    let result = {};

    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i];
        let quantity = arr[i + 1];

        if (result.hasOwnProperty(product)) {
            result[product] += Number(quantity);
        } else {
            result[product] = Number(quantity);
        }
    }

    let entries = Object.entries(result);

    for (let [product, quantity] of entries) {
        console.log(`${product} -> ${quantity}`)
    }
}