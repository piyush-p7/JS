var rect = require("./Module");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function solve(){
    readline.question('Enter first number: ', firstNum => {
        readline.question('Enter second number: ', secondNum => {
        console.log("Solving the Add/Sub");
          let x = parseInt(firstNum);
          let y = parseInt(secondNum);
          rect(x, y, (err, solution)=>{
            if(err){
                console.log("ERROR: "+ err.message);
                readline.close();
            }
            else{
                console.log("Add: "+solution.add());
                console.log("Sub: "+solution.sub());
                readline.close();
            }
        });
        });
    });
    
}
solve();