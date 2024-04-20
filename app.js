const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(express.static('static'))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(bodyParser.raw());

app.post('/handler', (req, res) => {
    console.log(req.body)
    const body = req.body;
    res.setHeader('Content-type', 'application/json; charset=UTF-8')
    res.send({url: body.data});
});

app.get('/postback', (req, res) => {
    console.log('\n')
    console.log('--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--', req.url)
    console.log('\n')
    console.log('LOG URL:', req.url)
    console.log('LOG GET BODY:', req.body);
    console.log('LOG GET HEADERS:', req.headers);
    res.sendStatus(200)
});

app.get('/logs/get', (req, res) =>{
    console.log('\n')
    console.log('--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--', req.url)
    console.log('\n')
    console.log('LOG GET BODY:', req.body);
    console.log('LOG GET HEADERS:', req.headers);
    res.sendStatus(200)
})

app.get('/logs/post', (req, res) =>{
    console.log('LOG POST BODY:', req.body);
    console.log('LOG POST HEADERS:', req.headers);
    res.sendStatus(200)
});

app.get('/', (request, response) => {response.render('pages/index')});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});