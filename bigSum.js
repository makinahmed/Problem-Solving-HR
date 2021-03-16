
function compareTriplets(a, b) {
    let count1 = [0,0];
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < b.length ;) {
            if (a[i] > b[j]) {
                count1[0] += 1;
                break;
            } else if (a[i] < b[j]) {
                count1[1] += 1;
                break;
            }
            else
            break;
        }
    }
    return count1;

}


console.log(compareTriplets([5, 6, 7], [3,6,10]));