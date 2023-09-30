function substract(arr) {

    let origSum = 0;
    let modSum = 0;

    for (let i = 0; i < arr.length; i++) {

        let num = arr[i];
        origSum += num;

        if (num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }

        modSum += num;
        arr[i] = num;
    }

    console.log(arr);
    console.log(origSum);
    console.log(modSum);

}

substract([5, 15, 23, 56, 35]);
substract([-5, 11, 3, 0, 2]);