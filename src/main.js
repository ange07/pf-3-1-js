export function addTwoNumbers(num1, num2) {
  const add = num1 + num2;
  console.log(add);
}

//Código de better Cal
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: No se puede dividir por cero.";
  }
  return num1 / num2;
}

// Switch
const opcion = prompt("1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir");

switch(opcion) {
    case "1":
        const num1 = +prompt("Primer número:");
        const num2 = +prompt("Segundo número:");
        alert(add(num1, num2));
        console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
        break;

    case "2":
        const num3 = +prompt("Primer número:");
        const num4 = +prompt("Segundo número:");
        alert(subtract(num3, num4));
        console.log(`${num3} - ${num4} = ${subtract(num3, num4)}`);
        break;

    case "3":
        const num5 = +prompt("Primer número:");
        const num6 = +prompt("Segundo número:");
        alert(multiply(num5, num6));
        console.log(`${num5} × ${num6} = ${multiply(num5, num6)}`);
        break;

    case "4":
        const num7 = +prompt("Primer número:");
        const num8 = +prompt("Segundo número:");
        alert(divide(num7, num8));  // ← Directo!
        console.log(`${num7} ÷ ${num8} = ${divide(num7, num8)}`);
        break;

    default:
        alert("Opción no válida");
}
