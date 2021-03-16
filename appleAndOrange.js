function countApplesAndOranges(s = 7, t = 10, a = 4, b = 12, apples = [2, 3, -4], oranges = [3, -2, -4]) {

    let numApples = 0;
    let numOranges = 0;

    for (let i = 0; i < apples.length; i++) {
        if ((apples[i] + a) >= s && (apples[i] + a) <= t) {
            numApples++;
        }
    }



    for (let i = 0; i < oranges.length; i++) {
        if ((oranges[i] + b) >= s && (oranges[i] + b) <= t) {
            numOranges++;
        }
    }

    console.log(numApples);
    console.log(numOranges);
}

countApplesAndOranges()

