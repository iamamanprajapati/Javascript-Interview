function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    }
}

console.log(add(10)(20)(30)());
