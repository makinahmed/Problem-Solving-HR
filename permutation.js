function absolutePermutation(n, k) {
    var result = []
    let d = 1

    for (var i = 0, j = 0; i < n; i += 1, j += 1) {
        if (j == k) {
            d *= -1
            j = 0
        }

        let value = i + 1 + k * d

        if (value < 1 || value > n)
            return [-1]
        result[i] = value
    }

    return console.log(result);
}


absolutePermutation(3, 1)