
// function x() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = false;
//             if (success) {
//                 resolve("successfully fetched")
//             } else {
//                 reject("failed")
//             }
//         }, 2000)
//     })
// }

// x()
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))



const datas = [
    { name: "Aman", age: 24 },
    { name: "anshul", age: 26 },
    { name: "Pankaj", age: 29 }
]

function getDatas() {
    setTimeout(() => {
        let output = ""
        datas.forEach((i) => {
            output += `<li>${i.name}</li>`;
        })
        document.getElementById("myid").innerHTML = output
    }, 1000)
}

// with the callback

// function addUser(user, getDatas) {
//     setTimeout(() => {
//         datas.push(user)
//         getDatas();
//     }, 2000)

// }

// addUser({ name: "akash", age: 26 }, getDatas)


// with the promises

function addNewUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(user);
            let error = false;
            if (error) {
                reject("rejected")
            } else {
                resolve("resolved")
            }
        }, 2000)
    })
}

// addNewUser({ name: "Akash", age: 26 })
//     .then(getDatas)
//     .catch(error => console.log(error))



async function start() {
    await addNewUser({ name: "Akash", age: 26 })
    getDatas()
}

start()

