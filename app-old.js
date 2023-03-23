const http = require('http');

http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv' });
    
    res.write('Hola Mundo');
    // res.write('1, Javier\n');
    // res.write('2, Carlos\n');
    // res.write('3, Nicanor\n');
    // res.write('4, Oxometorfano\n');
    res.end();
})
.listen(8080);
console.log('Escuchando el puerto 8080');