const radius = [1, 2, 3, 4];

function area(a) {
    return Math.PI * a * a;
}

function circumference(a) {
    return 2 * Math.PI * a;
}

function calculations(radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}

Array.prototype.calculate = function (logic) { // polyfill for map 
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]))
    }
    return output
}


console.log(radius.calculate(area));


// console.log(radius.map(area));
// console.log(radius.map((i) => circumference(i)));



// console.log(calculations(radius, area));

// console.log(calculations(radius, circumference));
