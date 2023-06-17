const fs = require('fs');

console.log('antes de leer un archivo');
// Leer Archivos
fs.readFile('inde.html', 'utf-8', (err, contenido) => {
  if (err){
    throw err;
  } 
    console.log(contenido);
});
console.log('despues de leer un archivo');

// Renombrar Archivos
fs.rename('index.html','main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Nombre Cambiado Exitosamente')
});
console.log('despues de renombrar un archivo');


// Agregar contenido al final del archivo, este metodo crea un archivo nuevo si este no existe
fs.appendFile('index.html', '<p>Hola</p>', (err) => {
  if (err) {
    throw err;
  }
  console.log ('Archivo Actualizado')
});
console.log('despues de actualizar un archivo');


// Reemplazar el contenido del archivo.
fs.writeFile('index.html', 'contenido Nuevo ', (err) => {
  if (err) {
    throw err;
  } console.log('Contenido Reemplazado Exitosamente')
});
console.log('despues de reemplazar a un archivo');

// Eliminar un archivo

fs.unlink('main.html', (err) => {
 if (err) {

 
  throw err;
 }
 console.log('archivo eliminado.');
});
console.log('despues de eliminar un archivo');
