function rotateArr(arr) {

    let rotation = Number(arr[arr.length - 1]);
    arr.pop();

    for (let i = 1; i <= rotation; i++) {
        arr.splice(0,0,arr[arr.length - 1]);
        arr.pop();
    }
    console.log(arr.join(' '));
}

rotateArr(['1', '2', '3', '4', '2']);
rotateArr(['Banana', 'Orange', 'Coconut','Apple', '15']);