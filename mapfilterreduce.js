// const arr = [5, 1, 3, 2, 8, 4]

// const filterted = arr.filter(val => val % 2 === 0)

// console.log(filterted);

// const isEven = (x) => {
//     return x % 2 === 0;
// }


// console.log(arr.filter(isEven));

// find the maximum value


// const max = arr.reduce(function (max, curr) {
//     if (curr > max) {
//         max = curr
//     }
//     return max
// }, 0)

// console.log(max);




const users = [
    {
        firstname: "John",
        lastname: "Doe",
        age: 22
    },
    {
        firstname: "Jane",
        lastname: "Smith",
        age: 34
    },
    {
        firstname: "Alice",
        lastname: "Johnson",
        age: 24
    },
    {
        firstname: "Sasa",
        lastname: "Johnson",
        age: 22
    }
]

const fullname = users.map(i => i.firstname + " " + i.lastname)

console.log(fullname);

const ageObject = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1
    }

    return acc
}, {})

console.log(ageObject);


const filterName = users.filter(user => user.age > 20).map(user => user.firstname)

console.log(filterName);



const myname = users.reduce((acc, curr) => {
    if (curr.age > 20) {
        acc.push(curr.firstname)
    }
    return acc
}, [])


console.log(myname);











