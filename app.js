const fs = require('fs');


// Leer Archivos
// fs.readFile('inde.html', 'utf-8', (err, contenido) => {
//   if (err){
//     throw err;
//   } 
//     console.log(contenido);
  
// });
fs.rename('index.html','main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Nombre Cambiado Exitosamente')
});

