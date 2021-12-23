function testSize(num) {
    // Only change code below this line
  
  if(num < 5){
  return "Tiny";
  }
   else if(num < 10){
  return "Small";
  }
   else if(num < 15){
  return "Medium";
  }
   else if(num < 20){
  return "Large";
  }
   else if(num >= 20){
  return "Huge";
  }
    // Only change code above this line
  }
  
  testSize(7);



  function sum(arr, n) {
    // Only change code below this line
    if(n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
    // Only change code above this line
  }