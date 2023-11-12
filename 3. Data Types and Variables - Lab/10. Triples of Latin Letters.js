function triples(n) {

    let bufferX = '';
    let bufferY = '';
    let bufferZ = '';

    for (let x = 0; x < n; x++) {
        bufferX += String.fromCharCode(97 + x);
        for (let y = 0; y < n; y++) {
            bufferY += String.fromCharCode(97 + y);
            for (let z = 0; z < n; z++) {
                bufferZ += String.fromCharCode(97 + z);
                console.log(bufferX + bufferY + bufferZ);
                bufferZ = '';
            }
            bufferY = '';
        }
        bufferX = '';
    }
}

triples(2);