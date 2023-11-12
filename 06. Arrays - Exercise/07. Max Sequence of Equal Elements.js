function equalElements(arr) {

    let count = 0;
    let equal = 1;
    let maxEqualNum = 0;
    let buffer = ''

    for (let i = 0; i < arr.length; i++) {
        let elm = arr[i];
        let nextElm = arr[i + 1];
        if (elm == nextElm) {
            equal++;
            if (equal > count) {
                count = equal;
                maxEqualNum = elm;
            }
        } else {
            equal = 1;
        }
    }

    for (let i = 1; i <= count; i++) {
        buffer += maxEqualNum + ' ';
    }

    console.log(buffer);
}

equalElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
equalElements([1, 1, 1, 2, 3, 1, 3, 3]);
equalElements([4, 4, 4, 4]);
equalElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);