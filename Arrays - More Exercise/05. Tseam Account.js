function tseam(arr) {

    let account = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {
        let index = arr[i].split(' ');
        let command = index[0];
        let game = index[1];
        let event = account.indexOf(game);

        if (command == 'Install') {
            if (!account.includes(game)) {
                account.push(game);
            }
        } else if (command == 'Uninstall') {
            if (account.includes(game)) {
                account.splice(event, 1)
            }
        } else if (command == 'Update') {
            if (account.includes(game)) {
                account.push(game);
                account.splice(event, 1)
            }
        } else if (command == 'Expansion') {
            game = game.split('-');
            if (account.includes(game[0])) {
                let find = account.indexOf(game[0]);
                game = game.join(':');
                account.splice(find + 1, 0, game);
            }
        } else {
            console.log(account.join(' '));
            return;
        }
    }
}

tseam(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseam(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);