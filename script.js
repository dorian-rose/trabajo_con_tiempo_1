function hello() {
  alert("hello");
}

//Solicita al usuario 3 palabras, de la primera debes mostrar su segunda letra, de la segunda su tamaño y de la tercera las vocales que se encuentren en posiciones impares.

//primera palabra, muestra segunda letra
let palabra1 = prompt("inserte una palabra");
alert(`la segunda letra de la primera palabra es ${palabra1[1]}`);

//segunda palabra, muestra su tamaño
let palabra2 = prompt("inserte otra palabra ");
let stringSize = palabra2.length;
// alert(`la segunda palabra tiene un tamaño de ${stringSize} caracteres`);

//tercera palabra, muestra vocales en posiciones pares
let palabra3 = prompt("inserte una ultima palabra ");
let vocalesPares = "";
for (let i = 0; i < palabra3.length; i++) {
  if (
    i % 2 == 1 &&
    (palabra3[i] == "a" ||
      palabra3[i] == "e" ||
      palabra3[i] == "i" ||
      palabra3[i] == "o" ||
      palabra3[i] == "u")
  ) {
    vocalesPares += palabra3[i];
  }
}
alert(vocalesPares);
