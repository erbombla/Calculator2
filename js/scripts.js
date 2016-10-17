var input = prompt("enter in three numbers separated by a space to add.");
var number1 = parseInt(input.charAt(0));
var number2 = parseInt(input.charAt(2));
var number3 = parseInt(input.charAt(4));
var sum = function(firstnum, secondnum, thirdnum) {
	return firstnum + secondnum + thirdnum;
};
var result = sum(number1, number2, number3);
alert(number1 + " + " + number2 + " + " + number3 + " = " + result);

var input = prompt("enter in 2 numbers separated by a space to subtract.");
var number1 = parseInt(input.charAt(0));
var number2 = parseInt(input.charAt(2));
var subtract = function(firstnum, secondnum) {
	return firstnum - secondnum;
};
var result = subtract(number1, number2);
alert(number1 + " - " + number2 + " = " + result);

var input = prompt("enter in three numbers separated by a space to multiply.");
var number1 = parseInt(input.charAt(0));
var number2 = parseInt(input.charAt(2));
var number3 = parseInt(input.charAt(4));
var multiply = function(firstnum, secondnum, thirdnum) {
	return firstnum * secondnum * thirdnum;
};
var result = multiply(number1, number2, number3);
alert(number1 + " * " + number2 + " * " + number3 + " = " + result);

var input = prompt("enter in 2 numbers separated by a space to divde.");
var number1 = parseInt(input.charAt(0));
var number2 = parseInt(input.charAt(2));
var divide = function(firstnum, secondnum) {
	return firstnum / secondnum;
};
var result = divide(number1, number2);
alert(number1 + " / " + number2 + " = " + result);
