


function x() {
    console.log("callback function");
}


function y(callback) {
    setTimeout(() => {
        callback();
    }, 3000)
    
}
y(x);


function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched");
      callback(); // Executing the callback after data is fetched
    }, 2000);
  }
  
  function processData() {
    console.log("Processing data");
  }
  
  fetchData(processData);
  