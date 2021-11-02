// Synchronous Function
function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync function completes");



// Asynchronous
function fiveHeads() {
    return new Promise((resolve, reject) => {
        let tossCoin = () => Math.random() > 0.5 ? "Heads" : "Tails";
        let headsCount = 0, attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped!`)
            if (result === "Heads") {
                headsCount++;
            }
        }
        if (headsCount === 5) {
            resolve(`It took ${attempts} tries to flip five "Heads".`)
        } else if (attempts > 100) {
            reject("Oops. Too many attempts.")
        } 
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));



