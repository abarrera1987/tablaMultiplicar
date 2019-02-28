const argv = require("./config/yargs").argv;
const colors = require('colors');
const { nuevaTabla, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

let base = argv.base;
let limite = argv.limite;

switch (comando) {

    case 'listar':

        listarTabla(base, limite).then(tabla => console.log(tabla)).catch(e => console.log(e));
        break;

    case 'crear':

        nuevaTabla(base, limite).then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}