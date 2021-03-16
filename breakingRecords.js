function breakingRecords(scores) {
    var highest = scores[0];
    var lowest = scores[0];
    var highCount = 0;
    var lowCount = 0;
    for(var i=1; i<scores.length; i++){
        if(scores[i]>highest){
            highest = scores[i];
            highCount++;
        } else if(scores[i] < lowest){
            lowest = scores[i];
            lowCount++;
        }
    }
    return console.log([highCount, lowCount]);
}

breakingRecords([ 9.10,5,20,20,4,5,2,25,1])