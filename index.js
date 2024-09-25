function averageThreeNumbers(a, b, c) {
  return (a + b + c) / 3;
}

let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let num3 = parseFloat(prompt("Введите третье число:"));

let average = averageThreeNumbers(num1, num2, num3);
console.log("Среднее арифметическое:" + average);
