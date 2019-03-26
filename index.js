var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
}

function solveRect(l, b) {
    console.log("Solving Rectangle Perimeter and Area");
    if(l<=0 || b<=0) {
        console.log("Dimensions of Rectangle Should Be Grater Than 0: " + "l: " + l+ " b: " +b);
    }
    else {
        console.log("Perimeter of Rectangle: " + rect.perimeter(l,b));
        console.log("Area of Rectangle: " + rect.area(l,b));
    }
}

solveRect(2,3);
solveRect(3,5);
solveRect(0,5);
solveRect(-2,5);