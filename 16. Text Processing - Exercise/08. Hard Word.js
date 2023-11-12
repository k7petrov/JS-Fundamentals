function hardWords(arr) {

    let missingWords = arr.pop();
    let output = '';
    
    let text = arr.shift().split(' ');

    for (let word of text) {

        if (word[0] != '_') {
            output += word + ' ';
        } else {

            let sign = '';

            if (word[word.length - 1] != '_') {
                sign = word.substring(word.length - 1);
                word = word.substring(0, word.length - 1)
                
            }

            for (let missing of missingWords) {
                if (word.length == missing.length) {
                    output += missing + sign + ' ';
                }
            }
        }
    }
    console.log(output.trim());
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])