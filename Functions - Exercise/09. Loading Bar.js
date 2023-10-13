function loadingBar(num) {

    let currentPercent = num;
    let arr = ['[', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];
    let index = 1;

    while (num > 0) {

        if (num >= 100) {
            console.log(`100% Complete!`);
            console.log(`[%%%%%%%%%%]`);
            return;
        }

        arr[index] = '%';
        num -= 10;
        index++;
    }
    arr.push(']')
    console.log(`${currentPercent}% ${arr.join('')}`);
    console.log("Still loading...");
}

loadingBar(40);