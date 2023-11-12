function dungeon(arr) {

    let arrMod = arr[0].split(' ').join().split('|').join().split(',');
    let health = 100;
    let coins = 0;
    let rooms = 1;
   
    for (let i = 0; i < arrMod.length; i++) {
        
        let element = arrMod[i];
        let num = arrMod[i + 1];

        if (element == 'potion') {
            
            if (health + Number(num) >= 100) {
                num = 100 - health;
                health = 100;
            } else {
                health += Number(num);
            }

            console.log(`You healed for ${(num)} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (element == 'chest') {

            console.log(`You found ${arrMod[i + 1]} coins.`);
            coins += Number(num);

        } else {

            health -= num;
            
            if (health > 0) {
                console.log(`You slayed ${element}.`);
            } else {
                console.log(`You died! Killed by ${element}.`);
                console.log(`Best room: ${rooms}`);
                return;
            }
        }
        rooms++;
        i++;
    }

    if (alive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
//dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);