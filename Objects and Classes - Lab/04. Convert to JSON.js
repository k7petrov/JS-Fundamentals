function convert(firstName, lastName, hairColor) {

    let person = {name: firstName, lastName, hairColor};
    console.log(JSON.stringify(person));
}

convert('George', 'Jones',
'Brown');