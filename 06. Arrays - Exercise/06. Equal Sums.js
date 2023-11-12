function equalSums(arr) {

    let left = 0;
    let right = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i + 1] === undefined && i == 0) {
            console.log(i);
            return;
        }
        for (let j = i + 1; j < arr.length; j++) {
            right += arr[j];
            if (left == right || right == 0 || right == undefined) {
                console.log(i);
                return;
            }
        }
 
        right = 0;
        left += arr[i];
    }

    console.log(`no`);
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1])
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99,3, 4, 2, 5, 1,1, 4]);