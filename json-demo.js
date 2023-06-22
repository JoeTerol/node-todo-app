let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVisitas": 45642,
    "numLikes": 21123,
    "temas": [
         "JavaScript",
         "Node.js"

    ],
    "esPubluico": false
};
console.log(infoCurso);
// CONVERTIUR UN OBJETO EN STRING
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON );
console.log(typeof infoCursoJSON); 
// COVNERTIR UN STRING EN UN OBJETO
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
