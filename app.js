var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', (req, res) => {
    let data = {age: 23, job: 'developer'}
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
