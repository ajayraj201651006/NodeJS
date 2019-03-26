var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("Solving Rectangle Perimeter and Area");
    
    rect(l, b, (err, rectangle) => {
        if(err) {
            console.log("ERROR: " + err.message);
        }
        else {
            console.log("The Perimeter: " + rectangle.perimeter());
            console.log("The Area: " + rectangle.area());
        }
    });

    console.log("This is The Last Statement")
}

solveRect(2,3);
solveRect(3,5);
solveRect(0,5);
solveRect(-2,5);