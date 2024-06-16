function getRange(min, max, step = 1) {
    let resArray = [];
    if(step < 0) {
        for (let i = Math.max(min, max); i >= Math.min(min, max); i += step) {
            resArray.push(i);
        }
    } else if (step > 0) {
        for (let i = min; i <= max; i += step) {
            resArray.push(i);
        }
    }
    return resArray;
}

function arraySum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}

console.log(getRange(1, 10, 2) + ' sum: ' + arraySum(getRange(1, 10, 2)));
console.log(getRange(2, 5, -1) + ' sum: ' + arraySum(getRange(2, 5, -1)));
console.log(getRange(10, 15) + ' sum: ' + arraySum(getRange(10, 15)));