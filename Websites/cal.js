function displayFunction(value) {
    var numDisplay = document.getElementById("num_display");
    numDisplay.innerHTML += value;
 }
 
 function clearFunction(){
   var numDisplay = document.getElementById("num_display");
   numDisplay.innerHTML = '';
 }
 
 function evaluateFunction(){
  var numDisplay = document.getElementById("num_display").textContent;
  var result = eval(numDisplay);
  document.getElementById("num_display").innerHTML = result;
 }