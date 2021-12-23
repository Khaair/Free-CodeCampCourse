const myList = [["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15]];


// Only change code below this line

function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }
 // Only change code above this line