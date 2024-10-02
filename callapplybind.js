let userDetails = {
    name: "Aman",
    age: 24,
    designation: "SE",

}

let printDetails = function (city, country) {
    console.log(this.name + " " + city + " " + country);
}


let userDetails2 = {
    name: "Anshul",
    age: 26,
    designation: "SE",
}


printDetails.call(userDetails, "delhi", "India")

printDetails.apply(userDetails, ["delhi", "India"])

const bindData = printDetails.bind(userDetails, "delhi", "India")
bindData()