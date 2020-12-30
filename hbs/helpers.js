//Helpers
const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

//Capitalizar letras mayusculas
hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    return palabras;
});