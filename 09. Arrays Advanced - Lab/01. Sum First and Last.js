function sumFirstAndLast(arr) {

    if (arr.length > 1) {
        console.log(Number(arr.shift())  + Number(arr.pop()));

    } else if (arr.length == 1) {
        console.log(Number(arr.shift()));
    }
    
}

sumFirstAndLast(['20', '30', '50']);