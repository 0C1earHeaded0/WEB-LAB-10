function drowTriangle(n) {
    let str = '';
    for(let i = 1; i <= n; i++) {
        str += `${i}\t${"#".repeat(i)}\n`;
    }
    return str;
}

console.log(drowTriangle(7));