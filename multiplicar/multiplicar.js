const fs = require('fs');
const colors = require('colors');
listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`El valor: ${base} no es un número`);

        }

        let tabla = "";

        console.log('============================================='.green);
        console.log('============Tabla de Multiplicar============='.green);
        console.log(`================== No ${base} =====================`.green);

        for (let i = 1; i <= limite; i++) {

            tabla += `${base} * ${i} = ${base*i}\n`.red;

        }

        resolve(tabla);

    })

}

nuevaTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`${base} No es un numero`);
            return;
        }

        if (!Number(limite)) {

            reject(`${limite} No es un numero`);
            return;
        }

        let table = "";

        for (let i = 1; i <= limite; i++) {

            table += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, table, (err) => {
            if (err)
                reject(err)
            else
                resolve(colors.magenta(`tabla-${base}.txt`))

        });

    })

}

module.exports = {

    nuevaTabla,
    listarTabla

}