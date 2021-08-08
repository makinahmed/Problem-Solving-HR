const phones = [
    { name: 'Samsung', price: 43000 },
    { name: 'Realmi', price: 11000 },
    { name: 'Nokia', price: 3680 },
    { name: 'HTC', price: 25000 },
    { name: 'Samphony', price: 10500 },
    { name: 'Vivo', price: 5500 },
    { name: 'Oppo', price: 12500 },
    { name: 'Xaomi', price: 30500 }
]
let phoneName;
let cheapest = phones[0].price; //43000
for (let i = 0; i < phones.length; i++) {
    if (cheapest > phones[i].price) {  // 11000 > 3680;
        cheapest = phones[i].price; // cheapest = 3680;
        phoneName = phones[i];
    }

}
console.log(`${phoneName.name} is the cheapest phone in our collection
and the price is : ${cheapest}`);