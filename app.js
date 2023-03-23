require('dotenv').config();
const express = require('express');
var hbs = require('hbs');

const app = express();
const port = process.env.PORT | 8080;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Ángel de la Mecha',
    titulo: 'Curso de Node'
  });
});

// app.get('/hola-mundo', (req, res) => {
//   res.send('Hola Mundo en su respectiva ruta');
// });

app.get('/generic', (req, res) => {
  // res.sendFile(__dirname + '/public/generic.html');
  res.render('generic', {
    nombre: 'Ángel de la Mecha',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  // res.sendFile(__dirname + '/public/elements.html');
  res.render('elements', {
    nombre: 'Ángel de la Mecha',
    titulo: 'Curso de Node'
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log('Escuchando el puerto', port);
});