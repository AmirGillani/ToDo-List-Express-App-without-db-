var x = 1;

if (x === 1) {

    //x value is being updated in a function 
    //and this change is globally

    var x = 2;

    console.log(x);
    // Expected output: 2
}

console.log(x);

// let allows you to declare variables that are limited to the scope of a block statement, 
//or expression on which it is used, unlike the var keyword, which declares a variable globally, 
//or locally to an entire function regardless of block scope. The other difference between var and
// let is that the latter can only be accessed after its declaration is reached

let x = 1;

if (x === 1) {

    //x value is being updated in a function 
    //and this change is locally

    let x = 2;

    console.log(x);
    // Expected output: 2
}

console.log(x);

function varTest() {
    var x = 1;
    {
      var x = 2; // same variable!
      console.log(x); // 2
    }
    console.log(x); // 2
  }
  
  function letTest() {
    let x = 1;
    {
      let x = 2; // different variable
      console.log(x); // 2
    }
    console.log(x); // 1
  }
