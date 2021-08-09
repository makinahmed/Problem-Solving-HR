// problem no. 1


function seerToMon(seer) {
    if ((typeof seer === 'number') && (seer % 1 === 0) && (seer >= 0)) {   // checked whether input 'seer' type is integer number or not and greater than or equal to 0;
        let mon = seer / 40;
        return mon;
    }
    else {  // execute if input is 'string',less than 0, double etc.
        return console.log('Error! Please give an integer number.');
    }
}

console.log(seerToMon(90));

// problem no. 2

function totalSales(shirts, pants, shoes) {
    if ((typeof shirts && typeof pants && typeof shoes === 'number') && ((shirts && pants && shoes) % 1 === 0) && (shirts && pants && shoes) >= 0) {   // checked whether input 'shirts, pants,shoes' type is integer number or not and greater than or equal to 0;
        return (shirts * 100) + (pants * 200) + (shoes * 500);
    }
    else {  // execute if input is 'string',less than 0, double etc.
        return console.log('Error! Please give an integer number.');
    }
}

console.log(totalSales(0, 5, 0));

// problem no. 3

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



// problem no. 4

let arr = ['nur', 'turu', 'nilu', 'rahim', 'karim']

function perfectFriend(friendsArr) {
    if (Array.isArray(friendsArr)) {  // cheaked input is an array or not.
        let friendName = friendsArr[0]
        for (const friend of friendsArr) {
            if (friendName.length < friend.length) {  // compared the length among the strings of the input array.
                friendName = friend;
            }
        }
        return friendName;   // returned the final result.
    }
    else {   // execute if input is not an array 
        console.log('Please Enter an array that contain strings');
    }
}
console.log(perfectFriend(arr));


