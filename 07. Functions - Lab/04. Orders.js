function orders(product, quantity) {

   let price = {
    'coffee': (product, quantity) => 1.5 * quantity,
    'water': (product, quantity) => 1 * quantity,
    'coke': (product, quantity) => 1.4 * quantity,
    'snacks': (product, quantity) => 2 * quantity
   };

   let logPrice = price[product];

   console.log(logPrice(product, quantity).toFixed(2));
}

orders("water", 5);
orders("coffee", 2);