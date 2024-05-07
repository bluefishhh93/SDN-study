const rect = require('./rectangle');

function solveRect(length, breadth) {
    console.log(`Solving for rectangle with l = ${length} and b = ${breadth}`);

    rect(length, breadth , (err,rectangle) =>{
        if(err){
            console.log("ERROR: ", err.message);
        }
        else{
            console.log("The area of the rectangle of dimensions l = " + length + " and b = " + breadth + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = " + length + " and b = " + breadth + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after call the react()");
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
