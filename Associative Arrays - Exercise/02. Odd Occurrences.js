function solve(str) {

    let arr = str.split(' ');
    let occurrences = [];

    for (let item of arr) {

        let count = arr.filter(x => x.toLowerCase() == item.toLowerCase()).length;

        if (count % 2 != 0) {

            let match = false;

            for (let el of occurrences) {

                if (el == item.toLowerCase()) {
                    match = true;
                }
            }

            if (!match) {
                occurrences.push(item.toLowerCase());
            }
        }
    }

    console.log(occurrences.join(' '));
    
}