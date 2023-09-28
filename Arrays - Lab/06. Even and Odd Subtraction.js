function substract(input) {

    let oddSum = 0;
    let evenSum = 0;

    for (let i = input.length - 1; i >= 0; i--) {
        let num = Number(input[i]);
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(evenSum - oddSum);

}

substract([1, 2, 3, 4, 5, 6]);
substract([3, 5, 7, 9]);