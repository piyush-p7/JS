var rect = require('./MyModule');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function Solve(){
    readline.question('Enter first number: ', firstNum => {
        readline.question('Enter second number: ', secondNum => {
          let num1 = parseInt(firstNum);
          let num2 = parseInt(secondNum);
          console.log("Solving the add/sub of "+ num1+", "+num2);
          console.log("The add: " + rect.add(num1, num2));
          console.log("The sub: " + rect.sub(num1, num2));
          readline.close();
        });
      });
}

Solve();
