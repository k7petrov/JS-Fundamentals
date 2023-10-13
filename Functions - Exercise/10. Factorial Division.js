function fuctorial(n1, n2) {

    let fuc1 = n1;
    let fuc2 = n2;

    for (let i = 1; i < n1; i++) {
        fuc1 *= n1 - i;
    }

    for (let i = 1; i < n2; i++) {
        fuc2 *= n2 - i;
    }

    let result = (fuc1 / fuc2).toFixed(2);
    console.log(result);
}

fuctorial(6, 2);