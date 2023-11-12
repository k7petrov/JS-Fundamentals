function search(arr, arr2) {

    let haveToTake = arr2[0];
    let haveToDelete = arr2[1];
    let searchedNum = arr2[2];
    let count = 0;

    let modded = arr.slice(0, haveToTake);
    modded.splice(0, haveToDelete);

    for (let el of modded) {
        if (el == searchedNum) {
            count++;
        }
    }
    console.log(`Number ${searchedNum} occurs ${count} times.`)

}