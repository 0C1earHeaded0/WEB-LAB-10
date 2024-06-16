function isAnagramms(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let chars1 = str1.split('').sort().join('');
    let chars2 = str2.split('').sort().join('');

    return chars1 === chars2;
}

console.log(isAnagramms("Helo", "olleH"));