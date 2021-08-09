

function seerToMon(seer) {
    if ((typeof seer === 'number') && (seer % 1 === 0) && (seer >= 0)) {   // checked whether input 'seer' type is integer number or not and greater than or equal to 0;
        let mon = seer / 40;
        return mon;
    }
    else {  // execute if input is 'string',less than 0, double etc.
        return console.log('Error! Please give an integer number.');
    }
}

console.log(seerToMon(90));