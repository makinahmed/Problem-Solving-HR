
function myFunc(arr) {
    const sum = arr.reduce((sum, current) => sum + current);

    const max = sum - Math.min(...arr);

    const min = sum - Math.max(...arr);

    console.log(min + ' ' + max);

}


myFunc([1,2,3,4,5])
