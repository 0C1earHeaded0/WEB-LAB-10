function devidedBy(array, devider) {
    return array.filter((val) => val % devider == 0);
}

console.log(devidedBy([10, 11, 9, 27], 3));