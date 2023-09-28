function solve(input) {

    while (input.length > 1) {
        
        let condensed = [];

        for (let i = 0; i < input.length; i++) {
            if (input[i + 1] != undefined) {
                condensed[i] = input[i] + input[i + 1];
            }
        }

        input = condensed;
    }

    console.log(input[0]);
}


solve([5, 0, 4, 1, 2]);
solve([2, 10, 3])
solve([1]);