const fs = require('fs');

// console.log(process);

nuevaTabla = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`${base} No es un numero`);
            return;
        }

        let table = "";

        for (let i = 1; i <= 10; i++) {

            table += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, table, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });

    })

}

module.exports = {

    nuevaTabla

}