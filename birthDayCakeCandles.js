function birthdayCakeCandles(ar) {

    let arr1 = Math.max(...ar)
    var count = 0;
    for (let i = 0; i <= ar.length; i++) {
        if (arr1 === ar[i]) {
            count++;
        }
    }
    return count;
}


console.log(birthdayCakeCandles([ 3, 2, 1, 3]));