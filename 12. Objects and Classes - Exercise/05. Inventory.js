function inventory(arr) {

    let heroes = [];

    for (let str of arr) {

        let currentHero = str.split(' / ');
        let heroName = currentHero.shift();
        let heroLevel = Number(currentHero.shift());

        heroes.push({ Hero: heroName, level: heroLevel, items: currentHero.join() });
    }

    heroes.sort((a,b) => a.level - b.level)

    for (let hero of heroes) {
        entries = Object.entries(hero);
        let name = entries.shift();
        console.log(name.join(': '));
        for (let entry of entries) {
            console.log(`${entry[0]} => ${entry[1]}`)
        }
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
)