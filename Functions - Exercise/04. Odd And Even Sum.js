function sums(num) {

    let odd = 0;
    let even = 0;
    let str = String(num);
    
    for (let i = 0; i < str.length; i++) {
        let curNum = Number(str[i]);
        if (curNum % 2 == 0) {
            even += curNum;
        } else {
            odd += curNum;
        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}

sums(3495892137259234);