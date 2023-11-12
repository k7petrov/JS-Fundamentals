function companyUsers(arr) {

    let result = {};

    for (let item of arr) {

        let [company, employee] = item.split(' -> ');

        if (result.hasOwnProperty(company)) {

            result[company].push(employee);
        } else {
            result[company] = [];
            result[company].push(employee);
        }
    }

    let entries = Object.entries(result);
    entries.sort((a, b) => a[0].localeCompare(b[0]))

    for (let [company, employees] of entries) {
        console.log(company)
        let unique = new Set(employees)
        for (let id of unique) {
            console.log(`-- ${id}`);
        }
    }
}