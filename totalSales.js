function totalSales(shirts, pants, shoes) {
    if ((typeof shirts && typeof pants && typeof shoes === 'number') && ((shirts && pants && shoes) % 1 === 0) && (shirts && pants && shoes) >= 0) {   // checked whether input 'shirts, pants,shoes' type is integer number or not and greater than or equal to 0;
        let totalSales = (shirts * 100) + (pants * 200) + (shoes * 500);
        return totalSales;
    }
    else {  // execute if input is 'string',less than 0, double etc.
        return console.log('Error! Please give an integer number.');
    }
}

console.log(totalSales(0, 5, 0));