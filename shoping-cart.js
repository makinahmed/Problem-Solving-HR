const cart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'phone', price: 55000, quantity: 1 },
]

let total = 0;
let productPrice = 0;
for (let i = 0; i < cart.length; i++) {
    productPrice = cart[i].price * cart[i].quantity
    console.log(`${cart[i].name} price : ${productPrice}`);
    total = productPrice + total;
}

console.log(`Total consumed : ${total}`);