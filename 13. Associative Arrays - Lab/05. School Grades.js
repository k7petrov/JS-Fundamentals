function solve(arr) {

    let grades = {};
    arr.sort((a, b) => a.localeCompare(b))

    for (let el of arr) {
        let [name, ...grade] = el.split(' ');

        if (grades.hasOwnProperty(name)) {
            let newGrades = grades[name];
            for (let i = 0; i < grade.length; i++) {
                newGrades.push(grade[i]);
            }
            grades[name] = newGrades;
        } else {
            grades[name] = grade;
        }
    }

    for (let [name, grade] of Object.entries(grades)) {
        let sum = 0;
        for (let i = 0; i < grade.length; i++) {
            sum += Number(grade[i]);
        }
        sum /= grade.length;
        console.log(`${name}: ${sum.toFixed(2)}`)
    }
}