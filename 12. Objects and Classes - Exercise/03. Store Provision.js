function store(stock, order) {

    class Product {
        constructor(product, quantity) {

            this.product = product;
            this.quantity = quantity;
        }

        print() {
            console.log(`${this.product} -> ${this.quantity}`);
        }

    }

    for (let i = 1; i < stock.length; i += 2) {
        stock[i] = Number(stock[i])
    }

    for (let i = 0; i < order.length; i += 2) {

        let currentProduct = order[i];

        if (stock.includes(currentProduct)) {
            let idx = stock.indexOf(currentProduct) + 1;
            stock[idx] += Number(order[i + 1]);
        } else {
            stock.push(order[i]);
            stock.push(Number(order[i + 1]));
        }
    }

    for (let i = 0; i < stock.length; i += 2) {

        let currentProduct = stock[i];
        let quantity = stock[i + 1];

        let product = new Product(currentProduct, quantity);

        product.print();
    }
}

store([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]
)
