function palInt(arr) {

    for (let num of arr) {

        let str = String(num);
        let checker = '';

        for (let i = str.length - 1; i >= 0; i--) {
            checker += str[i];
        }
        if (str == checker) {
            console.log(true);
        } else {
            console.log(false)
        }

        checker = '';
    }
}

palInt([123, 323, 421, 121]);