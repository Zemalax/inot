const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('static'))
app.use(bodyParser.json());

app.post('/handler', (request, response) => {
    console.log(request.body)
    const body = request.body;
    response.setHeader('Content-type', 'application/json; charset=UTF-8')
    response.send({url: body.data});
});

app.get('/logs/get', (req, res) =>{
    console.log('LOG GET BODY:', req.body);
    console.log('LOG GET HEADERS:', req.headers);
    res.sendStatus(200)
})

app.get('/logs/post', (req, res) =>{
    console.log('LOG POST BODY:', req.body);
    console.log('LOG POST HEADERS:', req.headers);
    res.sendStatus(200)
});

app.get('/', (request, response) => {
    response.render('pages/index', {
        number: '',
        letter: '',
        hint: ''
    });
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});