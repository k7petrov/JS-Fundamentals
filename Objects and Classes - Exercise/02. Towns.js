function towns(arr) {

    for (let el of arr) {

        let [town, latitude, longitude] = el.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townInfo = { town, latitude, longitude };
        console.log(townInfo);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)