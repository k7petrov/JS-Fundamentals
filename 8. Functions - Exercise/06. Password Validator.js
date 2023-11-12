function validator(pass) {
    let length = checkLength(pass)
    let symbols = checkSymbols(pass)
    let digits = checkDigitsCount(pass)

    function checkLength(pass) {
        if (pass.length > 5 && pass.length < 11) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }

    }

    function checkSymbols(pass) {

        for (let i = 0; i < pass.length; i++) {

            let curSymbol = pass.charCodeAt(i)

            if (curSymbol > 47 && curSymbol < 58 ||
                curSymbol > 40 && curSymbol < 91 ||
                curSymbol > 96 && curSymbol < 123) {

            } else {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    }

    function checkDigitsCount(pass) {

        let count = 0;

        for (let curDigit of pass) {


            if (curDigit.charCodeAt() >= 48 && curDigit.charCodeAt() <= 57) {
                count++;
            }
        }

        if (count < 2) {
            console.log("Password must have at least 2 digits");
            return false;
        } else {
            return true;
        }
    }

    if (length && symbols && digits) {
        console.log("Password is valid");
    }
}

//validator('logIn');
//validator('MyPass123');
validator('Pa$s$s')
