const number1 = parseInt(prompt("Enter a Farenheit temperature: "));
const result = ((number1 - 32) * 5 / 9).toFixed();

alert(("The temperature in Celsius is ")+(result));

const number2 = parseInt(prompt("Enter a Celsius temperature: "));
const result2 = ((number2 * 9 / 5) + 32).toFixed();

alert(("The temperature in Farenheit is ")+(result2));