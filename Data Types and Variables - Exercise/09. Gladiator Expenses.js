function gladiator(fights, helmet, sword, shield, armor) {

    let sum = 0;
    helmetRepairs = 0;
    swordRepairs = 0;
    shieldRepairs = 0;

    for (let i = 1; i <= fights; i++) {

        if (i % 2 == 0) {
            helmetRepairs++;
        } 
        
        if (i % 3 == 0) {
           swordRepairs++;
        } 
        
        if (i % 2 == 0 && i % 3 == 0) {
            shieldRepairs++;
        }
    }

    sum = (helmetRepairs * helmet) + (swordRepairs * sword) + (shieldRepairs * shield) + (Math.trunc(shieldRepairs / 2) * armor);

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiator(23,
12.50,
21.50,
40,
200)
