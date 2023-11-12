function charsInRange(char1, char2) {

    let num1 = char1.charCodeAt();
    let num2 = char2.charCodeAt();

    let nums = [num1, num2];
    if (num1 > num2) {
        nums = nums.reverse();
    }

    let result = '';

    for (let i = nums[0] + 1; i < nums[1]; i++) {
        let curChar = String.fromCharCode(i);
        result += curChar + ' ';
    }

    console.log(result);
}

//charsInRange('a', 'd');
charsInRange('C', '#');