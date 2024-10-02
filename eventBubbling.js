// Event bubbling, capturing
//Stop Propogation , Immediate Propogation & Prevent Default

let div = document.getElementById("mydiv")
let button = document.getElementById("eventme")
let a = document.querySelector("a")

div.addEventListener("click", () => {
    console.log("div");
})

// button.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("button");
// })

button.addEventListener("click", (event) => {
    console.log("button");
})


button.addEventListener("click", (event) => {
    event.stopImmediatePropagation()
    console.log("button1");

})

a.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log("clicked a");
    
})



