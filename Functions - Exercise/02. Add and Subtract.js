function addAndSubstract(x, y, z) {

    let sum = (a, b) => a + b;
    let substract = (a, b) => a - b;
    
    return substract(sum(x, y), z);
}

addAndSubstract(23, 6, 10)