function cityInfo(input) {

    for (let key of Object.keys(input)) {
        console.log(`${key} -> ${input[key]}`);
    }
}

cityInfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000" })