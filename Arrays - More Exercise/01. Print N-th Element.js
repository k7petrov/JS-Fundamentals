function printEl(array) {

    let n = Number(array[array.length - 1]);
    let print = [];

    for (let i = 0; i < array.length - 1; i+=n) {
        print.push(array[i]);
    }

    console.log(print.join(' '));
}

printEl(['5', '20', '31', '4', '20', '2']);
printEl(['dsa', 'asd', 'test', 'test', '2']);
printEl(['1', '2', '3', '4', '5', '6']);