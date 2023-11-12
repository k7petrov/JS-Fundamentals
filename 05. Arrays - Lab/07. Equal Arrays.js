function equal(input, input2) {

    let sum = 0;
    diff = false;

    for (let i = 0; i < input.length; i++) {
        let n1 = Number(input[i]);
        let n2 = Number(input2[i]);
        sum += n1;

        if (n1 != n2) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            diff = true;
            break;
        }
    }

    if (!diff) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equal(['10','20','30'],['10','20','30']);
equal(['1','2','3','4','5'],['1','2','4','4','5']);
equal(['1'], ['10'])