let arr = [1, 2, 2, 3, 4, 5, 1, 5, 6, 7, 8, 6, 7, 8, 9, 10, 11, 12, 10, 9, 8, 3, 22]


function removeDuplicate(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newarr.indexOf(arr[i]) === -1) {
            newarr.push(arr[i]);
        }
    }
    console.log(newarr);
}

removeDuplicate(arr)