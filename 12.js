function deepEqual(a, b) {
    if (a !== null & b !== null) {
        if (typeof a == 'object' && typeof b == 'object') {
            if (Object.keys(a).length !== Object.keys(b).length) {
                return false;
            }

            for (let key in a) {
                if (deepEqual(a[key], b[key])) {
                    return true;
                } else {
                    return false;
                }
            }
        } else if (a === b) {
            return true;
        }
    }

    return false;
}

console.log(deepEqual(
    { 
        prop1: 1,
        prop2: 2 
    }, 

    { 
        prop1: 1,
        prop2: 2 
    }));

console.log(deepEqual(15, 12));
console.log(deepEqual(null, 12));