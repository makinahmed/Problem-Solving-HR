function kangaroo(x1, v1, x2, v2) {

    if (v1 > v2) {

        let remainder = (x1 - x2) % (v2 - v1)

        if (remainder === 0) {

            return 'YES'
        } else {

            return 'NO'
        }

    } else {

        return 'NO'
    }

}


let result = kangaroo(2, 1, 1, 2)
console.log(result);