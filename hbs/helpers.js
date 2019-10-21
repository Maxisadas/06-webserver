var hbs = require('hbs');
//helpers
hbs.registerHelper('getAnio', () => {

    return new Date().getFullYear();
})
hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((elemnto, idx) => {
        palabras[idx] = elemnto.charAt(0).toUpperCase() + elemnto.slice(1).toLowerCase();
    });
    return palabras.join(' ');
})