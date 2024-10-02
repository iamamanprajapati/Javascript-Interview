


const eventFunction = () => {
    let count = 0;
    document.getElementById('clickMe').addEventListener('click', () => {
        setTimeout(() => {
            console.log("clicked me", ++count);
        }, 2000);
    });

    document.getElementById('myid').innerHTML = `<h1>${count}</h1>`

}

eventFunction();


console.log("before");

function waitForThreeSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("setTimeout 3 seconds");
            resolve();
        }, 3000);
    });
}

async function callback() {
    await waitForThreeSeconds();
    console.log("after");
}

callback();





