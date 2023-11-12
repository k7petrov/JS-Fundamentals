function cut(str) {

    let buffer = '';
    let buffer2 = '';
    let first = str.slice(0, str.length/2);
    let last = str.slice(str.length/2);

    for (let i = first.length - 1; i >= 0; i--) {
        buffer += first[i];
        buffer2 += last[i];
    }

    console.log(buffer);
    console.log(buffer2);

}

cut('tluciffiDsIsihTgnizamAoSsIsihT');
