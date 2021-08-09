function deliveryCost(numberOfTshirts) {
    if (typeof numberOfTshirts === 'number' && (numberOfTshirts % 1 === 0) && numberOfTshirts >= 0) {   // checked whether input 'numberOfTshirts' type is number or not and greater than or equal to 0;
        if (numberOfTshirts <= 100) { // execute for less equal to 100 t-shirts. t-shirts.
            const totalDeliveryCost = numberOfTshirts * 100;
            return totalDeliveryCost;
        }
        else if (numberOfTshirts <= 200) { // execute for less equal to 200 t-shirts.
            let totalDeliveryCost = 100 * 100;
            const restTshirts = numberOfTshirts - 100;
            totalDeliveryCost = totalDeliveryCost + (restTshirts * 80);
            return totalDeliveryCost;
        }
        else { // execute for greater than 200 t-shirts.
            let totalDeliveryCost = (100 * 100) + (100 * 80);
            const restTshirts = numberOfTshirts - 200;
            totalDeliveryCost = totalDeliveryCost + (restTshirts * 50);
            return totalDeliveryCost;
        }
    }
    else {  // execute if input is 'string',less than 0, double etc.
        return console.log('Error! Please give an integer number.');
    }
}

console.log(deliveryCost(101))

