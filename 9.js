function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === 'b') {
            count++;
        }
    }
    return count;
}

function countChars(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === char) {
            count++;
        }
    }
    return count;
}

console.log(countBs('BBC'));
console.log(countChars('kakkerlak', 'k'));