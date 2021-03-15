function timeConversion(s) {
    let ampm = s.slice(-2);
    let timeArr = s.slice(0, -2).split(":");

    if (ampm === "AM" && timeArr[0] === "12") {
        timeArr[0] = "00";
    } else if (ampm === "PM") {
        timeArr[0] = (timeArr[0] % 12) + 12
    }

    return timeArr.join(":");

}


let result = timeConversion('07:05:45PM')

console.log(result);