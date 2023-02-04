var rect = require("./Module");

function solve(x, y){
    console.log("Solving the Add/Sub");

    rect(x, y, (err, solution)=>{
        if(err){
            console.log("ERROR: "+ err.message);
        }
        else{
            console.log("Add: "+solution.add());
            console.log("Sub: "+solution.sub());
        }
    });
}

solve(0, 0);
solve(4, 5);