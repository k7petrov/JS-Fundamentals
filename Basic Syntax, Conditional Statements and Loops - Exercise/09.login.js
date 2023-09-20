function login(input) {
    let user = input[0];
    let correctPass = "";
    let isBlocked = false;

    for (let i = 1; i <= user.length; i++) {
        correctPass += user[user.length - i] + ''
    }

    let index = 1;
    let password = input[index];
    index++;

    while (password != correctPass) {

        if (index >= 5) {
            isBlocked = true;
            break;
        }

        password = input[index];
        index++;
        console.log(`Incorrect password. Try again.`);
    }

    if (isBlocked) {
        console.log(`User ${user} blocked!`);
    } else {
        console.log(`User ${user} logged in.`)
    }
}