// Event bubbling, capturing
//Stop Propogation , Immediate Propogation & Prevent Default

let div = document.getElementById("mydiv")
let button = document.getElementById("eventme")

div.addEventListener("click", () => {
    console.log("div");
},true)

button.addEventListener("click", () => {
    console.log("button");

},true)

