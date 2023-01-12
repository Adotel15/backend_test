
const fs = require('fs');
const colors = require('colors');

colors.enable();

const crearTabla = async (base = 5, listar, hasta) => {

    try {


        let salida = '';

        for(let i = 1; i < hasta + 1 ; ++i)  salida += `${base} x ${i} = ${ base * i }\n`;


        if(listar) {
            console.log("==================".red );
            console.log(`   Tabla del ${base}   `.blue );
            console.log("==================".red );
            
            console.log(salida)
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `Tabla ${base} creada`;

    } catch (err) {
        throw err;
    }
   
    // return new Promise( (resolve, reject) => {
    //     let salida = '';
    //     for(let i = 1; i < 11; ++i)  salida += `${base} x ${i} = ${ base * i }\n`;
    
    //     console.log(salida)
    //     fs.writeFileSync(`tabla-${base}.txt`, salida);
    //     resolve(`Tabla ${base} creada`)
    // })
  
}

module.exports = {
    crearTabla
}