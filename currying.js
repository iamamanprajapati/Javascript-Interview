

function addition(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}


const i = addition(10)(10)(20)
console.log("i", i);



const x = addition(10)
const y = x(10)
const z = y(10)

console.log(z);


userObj = {
    name: "Aman",
    age: 24
}

function userInfo(obj) {
    return function (userinfo) {
        return obj[userinfo];
    }
}


console.log(userInfo(userObj)('name'));


