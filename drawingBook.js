function pageCount(n, p) {
    /*
     * Write your code here.
     */
       let frontSide;
    let backSide;
    let roundFront;
    let roundBack;

    frontSide = p / 2;

    roundFront = Math.floor(frontSide);

    if (n % 2 === 0) {
        backSide = ((n - p) / 2) + .5;
        
        roundBack = Math.floor(backSide);
    } else {

        backSide = ((n - p) / 2);
        roundBack = Math.floor(backSide);
    }


    if (roundFront < roundBack) {
        return roundFront;
    } else if (roundBack < roundFront) {
        return roundBack;
    } else
        return roundBack;


}

console.log(pageCount(6,2));