function farming(str) {

    let shards = 250;
    let fragments = 250;
    let motes = 250;

    let junk = {};
    let key = { fragments: 0, motes: 0, shards: 0};

    let array = str.split(' ');
    
    while (shards > 0 && fragments > 0 && motes > 0) {

        let quantity = Number(array.shift());
        let material = array.shift().toLowerCase();

        if (material == 'shards') {
            shards -= quantity;
            if (key.hasOwnProperty(material)) {
                key[material] += quantity;
            } else {
                key[material] = quantity;
            }
        } else if (material == 'fragments') {
            fragments -= quantity;
            if (key.hasOwnProperty(material)) {
                key[material] += quantity;
            } else {
                key[material] = quantity;
            }
        } else if (material == 'motes') {
            motes -= quantity;
            if (key.hasOwnProperty(material)) {
                key[material] += quantity;
            } else {
                key[material] = quantity;
            }
        } else {
            if (junk.hasOwnProperty(material)) {
                junk[material] += quantity;
            } else {
                junk[material] = quantity;
            }
        }
    }

    if (shards <= 0) {
        console.log(`Shadowmourne obtained!`);
        key['shards'] = Math.abs(shards)
    } else if (fragments <= 0) {
        console.log(`Valanyr obtained!`);
        key['fragments'] = Math.abs(fragments)
    } else {
        console.log(`Dragonwrath obtained!`);
        key['motes'] = Math.abs(motes)
    }

    let keyEntries = Object.entries(key).sort((a, b) => b[1] - a[1]);
    
    for (let item of keyEntries) {
        console.log(`${item[0]}: ${item[1]}`);
    }
    
    let junkEntries = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));

    for (let item of junkEntries) {
        console.log(`${item[0]}: ${item[1]}`)
    }
}