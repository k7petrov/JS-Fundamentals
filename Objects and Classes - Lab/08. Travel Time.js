function travelTime(arr) {

    let destination = {};
    let buffer = {};
    let cityAndPrice = '';


    for (let item of arr) {
        item = item.split(' > ')
        let country = item.shift();

        if (destination.hasOwnProperty(country)) {
            destination[country].push(...item);
        } else {
            destination[country] = item;
        }
    }

    let entries = Object.entries(destination);

    for (let [country, cities] of entries) {
        
        for (let i = 0; i < cities.length; i += 2) {
            let city = cities[i];
            
            let price = cities[i + 1];

            if (buffer.hasOwnProperty(city)) {
                if (buffer[city] > price) {
                    buffer[city] = price;
                }
            } else {
                buffer[city] = price;
            }
        }
        destination[country] = buffer;
        buffer = {};
    }

    let finalEntries = Object.entries(destination).sort((a, b) => a[0].localeCompare(b[0]));

    for (let entry of finalEntries) {

        let country = entry[0]
        let myObj = entry[1];

        let entries = Object.entries(myObj).sort((a, b) => a[1] - b[1]);

        for (let item of entries) {
            cityAndPrice += ` ${item[0]} -> ${item[1]}`
        }

        console.log(`${country} ->${cityAndPrice}`);
        cityAndPrice = '';
    }
}