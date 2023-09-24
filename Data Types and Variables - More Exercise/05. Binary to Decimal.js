function binaryToDemical(binary) {

    let position = binary.length - 1
    let count = 0;
    demical = 0;

    for (let i = position; i >= 0; i--) {

        if (binary[i] == 1) {
             demical += 1 * 2 ** count;
        }

        count++;
    }

    console.log(demical)
}

binaryToDemical('11110000')