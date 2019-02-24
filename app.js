const { nuevaTabla } = require('./multiplicar/multiplicar');

// let base = 'lol';

// console.log(process.argv);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split("=")[1];

nuevaTabla(base).then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));