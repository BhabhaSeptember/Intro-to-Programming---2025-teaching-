// TYPEOF COMMAND
// typeof 8;
// 'number'
// var doTheMath = 7 + 8 + 36 + 18 + 12;
// undefined
// typeof doTheMath;
// 'number'
// typeof "the cat's favorite toy";
// 'string'

// Working With Objects
var dreamCar = {
    make: "Oldsmobile",
    model: "98",
    color: "hotpink",
    year: 1983,
    "body Style" : "Luxury Car",
    price: 450000
  }
  
  // alert("The type of dreamCar is: " + typeof dreamCar);
  
  document.getElementById("priceTag").innerHTML = dreamCar.price;
  
  document.getElementById("modelYear").innerHTML = dreamCar.year;
  
  document.getElementById("body").style.backgroundColor = dreamCar.color;
  
  document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;
  
  
  
  