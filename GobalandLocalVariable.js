// Declare the myGlobal variable below this line
let myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal Here
   oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


function myLocalScope() {
    // Only change code below this line
    let myVar
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

  function myTest() {
    const loc = "foo";
    console.log(loc);
  }
  
  myTest();
  console.log(loc);

  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  // Only change code above this line
  let outerWear = "sweater"
  return outerWear;
}

myOutfit();