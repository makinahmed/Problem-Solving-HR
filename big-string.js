let a = ['pulak', 'nayemm', 'nayo00n', 'mamun', 'Makin', 'Shuvo']
function str(arr) {
    let bigName = ''
    for (let name of arr) {
        if (bigName.length < name.length) {
            bigName = name;
        }
    }

    return bigName;

}

console.log(str(a))