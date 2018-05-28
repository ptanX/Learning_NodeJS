var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/profile/:name', (req, res) => {
    let data = {age: 23, job: 'developer', hobbies: ['Eating', 'Fucking', 'Playing football']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
