function special(n) {

    let sum = 0;
    let special = ''

    for (let i = 1; i <= n; i++) {

        let str = String(i);

        if (i >= 10) {

            for (let c = 0; c < str.length; c++) {
                sum += Number(str[c]);
            }

        } else {
            sum = i;
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            special = ' -> True';
        } else {
            special = ' -> False';
        }

        console.log(`${i}${special}`);
        sum = 0;
    }
}

special(15)