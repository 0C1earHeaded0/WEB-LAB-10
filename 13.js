function arrayConvolution(array) {
    let resArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            resArray = resArray.concat(array[i]);
        } else {
            resArray.push(array[i]);
        }
    }
    return resArray;
}

let array = [1, 2, [3, 4, 7], 5];
console.log(arrayConvolution(array));