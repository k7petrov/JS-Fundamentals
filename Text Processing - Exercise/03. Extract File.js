function extract(url) {

    let array = url.split('\\');
    let fileName = array[array.length - 1].split('.');

    let extension = fileName.pop();
    console.log(`File name: ${fileName.join('.')}`);
    console.log(`File extension: ${extension}`)
}

extract('C:\\Internal\\training-internal\\Template.pptx');