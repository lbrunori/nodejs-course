const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

const port = process.env.PORT || 3000;

//para las configuraciones
app.set('view engine', 'hbs');

app.use((req, res, next) => {

    var now = new Date().toString();

    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('log.txt', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log.');

        }
    });

    next();
})

// app.use((req, res, next) => {
//     res.render('maintenance.hbs')
// });

//para los middleware
app.use(express.static(__dirname + '/public'));


app.get('/', (request, response) => {
    response.render('index.hbs', {
        pageTitle: 'Home page',
        welcome: 'Welcome to my website',
        currentYear: new Date().getFullYear()
    })
    //response.send('<h1>Hello Express</h1>');
    // response.send({
    //     name: 'Lucardo',
    //     likes: ['Penacho', 'Cities']
    // })
});

//para las rutas
app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
});

app.get('/bad', (request, response) => {
    response.send({
        error: 'Unable to handle request'
    })
});

app.listen(port,  () => {
    console.log(`Listening on port ${port}`);
})
