function reverseArray(array) {
    let resArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        resArray.push(array[i]);
    }
    return resArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
}

console.log(reverseArray([1, 2, 3, 4]));

let array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
console.log(array);