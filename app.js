const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {

            demand: true,
            alias: 'b'
        },
        limite: {

            alias: 'l',
            default: 10

        }
    })
    .help()
    .argv;
const { nuevaTabla } = require('./multiplicar/multiplicar');

// let base = 'lol';

// console.log(process.argv);

let argv2 = process.argv;

console.log(argv);
// let parametro = argv[2];
// let base = parametro.split("=")[1];

// nuevaTabla(base).then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));