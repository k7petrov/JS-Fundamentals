function manipulation(integers, array) {

    for (let i = 0; i < array.length; i++) {
        let token = array[i].split(' ');
        let command = token[0];

        if (command == 'add') {
            integers.splice(token[1], 0, Number(token[2]));
        } else if (command == 'addMany') {
            for (let j = (token.length - 1); j >= 2; j--) {
                integers.splice(token[1], 0, Number(token[j]));
            }
        } else if (command == 'contains') {
            let num = Number(token[1]);
            console.log(integers.indexOf(num));
        } else if (command == 'remove') {
            integers.splice(token[1], 1)
        } else if (command == 'shift') {
            let shifts = Number(token[1]);
            for (let j = 0; j < shifts; j++) {
                integers.push(integers.shift());
            }
        } else if (command == 'sumPairs') {
            let newArr = [];
            for (let j = 0; j < integers.length; j += 2) {
                let num1 = integers[j];
                let num2 = integers[j + 1];
                if (num2 == undefined) {
                    newArr.push(num1);
                } else {
                    newArr.push(num1 + num2);
                }
            }
            integers = newArr;
        } else {
            console.log(`[ ${integers.join(', ')} ]`)
        }
    }
}