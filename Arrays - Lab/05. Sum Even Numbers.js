function even(input) {

    let sum = 0;

    for (let i = input.length - 1; i >= 0; i--) {
        let num = Number(input[i]);
        if (num % 2 == 0) {
            sum += num;
        }
    }
    console.log(sum);
}

even(['1', '2', '3', '4', '5', '6']);
even(['2','4','6','8','10']);