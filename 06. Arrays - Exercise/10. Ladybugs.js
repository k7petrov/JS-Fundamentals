function ladybugs(arr) {

    let field = arr[0];
    let ladyBugs = arr[1];
    let occupated = [];
    let command = '';


    for (let i = 0; i < ladyBugs.length; i++) {

        if (ladyBugs[i] == "'" || ladyBugs[i] == ' ') {
            continue;
        }

        if (ladyBugs[i] / 1 == ladyBugs[i]) {
            if (i < field);
            occupated[ladyBugs[i]] = 'bug';
        }
    }

    for (let i = 2; i < arr.length; i++) {
        command = arr[i];
        
        }

}

ladybugs([3, '0 1', '0 right 1', '2 right 1'])