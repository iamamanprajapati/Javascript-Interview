

var a = 10;

function x() {
    console.log("x1", a);
    var a = 20;
    function y() {
        var a = 30;
        console.log("y", a);

    }
    y();
    console.log("x2", a);
}

x();
