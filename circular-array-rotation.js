let array = [3, 4, 5]
// let lastElement = array.pop(array[array.length])
// console.log(lastElement);

function circularArrayRotation(arr, k, queries) {
    for (let i = 1; i <= k; i++) {
        let a = arr.pop()
        arr.unshift(a);
    }
    let result = [];
    for (let j = 0; j < queries.length; j++) {
        result.push(arr[queries[j]]);
    }
    return result;


}
console.log(circularArrayRotation(array, 2, [1, 2]));