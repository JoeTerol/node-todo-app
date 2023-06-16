function mostrarTema(tema) {
  console.log(`Estoy Aprendiendo ${tema}`);
};


// console.log('Antes de setImmediate()');

// setImmediate(mostrarTema, 'NodeJs');

// console.log('Después de setImmediate()');   

// setTimeout(mostrarTema, 5000, 'NodeJS');
// function sumar(a, b) {
//   console.log(a + b);
// }
// setTimeout(sumar, 3000, 5, 6);

setInterval(mostrarTema, 2000, 'Node.js')