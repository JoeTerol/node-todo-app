function saludar(nombre) {
    return `Hola ${nombre}`;
}

function saludarHolaMundo() {
    return  '¡Hola, Mundo!';
}

// module.exports.saludar = saludar;
// // module.exports.saludarHolaMundo = saludarHolaMundo; 
// LO MISMO SE PUEDE ESCRBIR DENTRO DE UN OBJETO

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo,
};