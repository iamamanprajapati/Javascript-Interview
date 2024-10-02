


const fetchData = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            if (data) {
                resolve(data);
            } else {
                reject('No Data found');
            }
        } catch (error) {
            reject(error);
        }
    })
}

fetchData()
.then((data) => console.log(data))
.catch((error) => console.log((error)))
