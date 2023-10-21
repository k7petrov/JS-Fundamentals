function sumFirstAndLast(arr) {

    let num1 = Number(arr.shift());
    let num2 = Number(arr.pop());
    console.log(num1 + num2);
}

sumFirstAndLast(['20']);