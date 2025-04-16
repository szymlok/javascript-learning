let num1 =  prompt("Enter first number:");
let num2 = prompt("Enter second number:");

number1 = parseFloat(num1);
number2 = parseFloat(num2);

let sum = number1 + number2;
let difference = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;
let exponentiation = number1 ** number2;

let outputParagraph = document.getElementById("output");
let resultText =`
Suma: ${sum} <br>
Difference: ${difference} <br>
Multiplication: ${multiplication} <br>
Division: ${division} <br>
Exponentiation: ${exponentiation} <br>
`;
outputParagraph.innerHTML = resultText;

//alert("The sum is: " + sum + "\nRóżnica: " + difference + "\nIloczyn: " + multiplication + "\nIloraz: " + division + "\nPotęga: " + exponentiation);
//console.log("The results are also listed in console");