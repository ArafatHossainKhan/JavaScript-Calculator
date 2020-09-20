var plusBtn = document.getElementById('plusBtn');
plusBtn.onclick = function () {
   var operator = document.getElementById('operator').value = '+';
}

var minusBtn = document.getElementById('minusBtn');
minusBtn.onclick = function () {
   var operator = document.getElementById('operator').value = '-';
}

var mulBtn = document.getElementById('mulBtn');
mulBtn.onclick = function () {
   var operator = document.getElementById('operator').value = '*'
}

var divBtn = document.getElementById('divBtn');
divBtn.onclick = function () {
   var operator = document.getElementById('operator').value = '/'
}

var equalBtn = document.getElementById('equalBtn');
equalBtn.onclick = function () {
   var operator = document.getElementById('operator').value;
   document.getElementById('result').value = myCalculator(operator);
}

var clearBtn = document.getElementById('clearBtn');
clearBtn.onclick = function () {
   document.getElementById('firstNumber').value = ' ';
   document.getElementById('secondNumber').value = ' ';
   document.getElementById('operator').value = ' ';
   document.getElementById('result').value = ' ';
}

function myCalculator (operator) {
var firstNumber = Number(document.getElementById('firstNumber').value);
var secondNumber= Number(document.getElementById('secondNumber').value);
switch (operator){
   case '+' :
      var result = firstNumber+secondNumber;
      break;
   case '-' :
      var result = firstNumber-secondNumber;
      break;
   case '/' :
      var result = firstNumber/secondNumber;
      break;
   case '*' :
      var result = firstNumber*secondNumber;
      break;
   }
   return result;
}


// var plusBtn = document.getElementById('plusBtn');
// plusBtn.onclick = function () {
//    document.getElementById('result').value = myCalculator('+');

// }
// var minusBtn = document.getElementById('plusBtn');
// plusBtn.onclick = function () {
//    document.getElementById('result').value = myCalculator('+');

// }


// var plusBtn = document.getElementById('plusBtn');
// plusBtn.onclick = function () {

// }
// var minusBtn = document.getElementById('minusBtn');
// minusBtn.onclick = function () {
//    sub()
// }

// function addition () {
//    var firstNumber    = Number(document.getElementById('firstNumber').value);
//    var secondNumber   = Number(document.getElementById('secondNumber').value);
//    var result = firstNumber+secondNumber;
//    document.getElementById('result').value = result;

// }
// function sub () {
//    var firstNumber    = Number(document.getElementById('firstNumber').value);
//    var secondNumber   = Number(document.getElementById('secondNumber').value);
//    var result = firstNumber-secondNumber;
//    document.getElementById('result').value = result;
// }
// function mul() {
//    var firstNumber    = Number(document.getElementById('firstNumber').value);
//    var secondNumber   = Number(document.getElementById('secondNumber').value);
//    var result = firstNumber*secondNumber;
//    document.getElementById('result').value = result;

// }
// function div(){
//    var firstNumber    = Number(document.getElementById('firstNumber').value);
//    var secondNumber   = Number(document.getElementById('secondNumber').value);
//    var result = firstNumber/secondNumber;
//    document.getElementById('result').value = result;

// }