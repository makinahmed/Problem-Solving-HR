let array = [1, 2, 3, 43, 30, 42, -24, 34, 25, -67, -78, -39, -75, 52]

let newarray = [];
for (let number of array) {
    if (number > 0) {
        newarray.push(number);
    }
    if (number < 0) {
        break;
    }
}
console.log(newarray);