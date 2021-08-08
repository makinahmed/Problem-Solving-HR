let str = 'Hello, How are You?';

function reverseString(str) {
    let reverse = '';

    for (let letter of str) {
        reverse = letter + reverse;
    }
    console.log(reverse);
}

reverseString(str)