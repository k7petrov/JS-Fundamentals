function convert(json) {

    let converted = JSON.parse(json);
    
    for (let key of Object.keys(converted)) {
        console.log(`${key}: ${converted[key]}`);
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');