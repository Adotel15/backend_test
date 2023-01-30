
const http = require('http');

// Crear un server que escucha en el puerto localhost:8080
http.createServer( (req, res) => {

    // Puedes modificar los headers, para devolver un status y el content_type : text/plain, applications/csv
    // Para que cuando hagas un llamado al server se descargue un archivo con nombre Probando.csv
    //res.setHeader('Content-Disposition', 'attachment; filename= Probando.csv')

   /*  const jsAJson = {
        id: 0,
        nombre: "Prueba"
    }

    res.write( JSON.stringify(jsAJson) ); */
    //res.write("Hola mundo, esto no es un h1? Prueba");

    res.write("Hola mundo");
    res.end();
})
.listen(8080)

console.log('Escuchando el puerto', 8080);