function isEven(num) {
    num = Math.abs(num);
    if (num === 1) {
        return false;
    } else if (num === 0) {
        return true;
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));