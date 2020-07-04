
var compare, obj, obj1, obj2, obj3;

obj = {
    a: 1,
    b: 'asd',
    az: false
};

obj1 = {
    a: 1,
    b: 'asd',
    az: false
};

obj2 = {
    a: 1,
    b: 'aasd',
    az: false
}

obj3 = {
    a: 1,
    ba: 'asd',
    az: false
}

compare = function(obj1, obj2) {
    var keys, i;

    keys = Object.getOwnPropertyNames(obj1);

    for (i = 0; i < keys.length; i++) {
        if (!obj2.hasOwnProperty(keys[i]) || obj1[keys[i]] !== obj2[keys[i]]) {
            return false;
        }
    }

    return true;
};

console.log(compare(obj, obj1));
