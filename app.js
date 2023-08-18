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

app.get('/jeppa', (request, response) => {
    response.render('index', {
        number: '1',
        letter: 'N',
        hint: 'something that is different from the rest'
    });
});

app.get('/pig', (request, response) => {
    response.render('index', {
        number: '2',
        letter: 'O',
        hint: 'us em error'
    });
});

app.get('/znk', (request, response) => {
    response.render('index', {
        number: '3',
        letter: 'S',
        hint: 'speak quickly a few times other hint'
    });
});

app.get('/kco', (request, response) => {
    response.render('index', {
        number: '4',
        letter: 'H',
        hint: 'bring the fire around ring'
    });
});

app.get('/moon', (request, response) => {
    response.render('index', {
        number: '5',
        letter: 'A',
        hint: 'PIG KORS PERSIK FLOOR HOBBIT CASTLEVANIA FOO MAGRA'
    });
});

app.get('/svinka', (request, response) => {
    response.render('index', {
        number: '6',
        letter: 'M',
        hint: 'The base is in the key position'
    });
});

app.get('/fade', (request, response) => {
    response.render('index', {
        number: '7',
        letter: 'E',
        hint: 'Simple hint around'
    });
});

app.get('/lion', (request, response) => {
    response.render('index', {
        number: '8',
        letter: 'F',
        hint: "It's not occult, but it has a specific name"
    });
});

app.get('/pisces', (request, response) => {
    response.render('index', {
        number: '9',
        letter: 'O',
        hint: 'A little Hindu'
    });
});

app.get('/zero', (request, response) => {
    response.render('index', {
        number: '10',
        letter: 'R',
        hint: 'A + B = AB'
    });
});

app.get('/nanaclif', (request, response) => {
    response.render('index', {
        number: '11',
        letter: 'P',
        hint: 'vary'
    });
});

app.get('/14', (request, response) => {
    response.render('index', {
        number: '12',
        letter: 'I',
        hint: 'I feel it in the water. I feel it in the ground.'
    });
});

app.get('/garlic', (request, response) => {
    response.render('index', {
        number: '13',
        letter: 'G',
        hint: '13 total'
    });
});

app.get('/oink', (request, response) => {
    response.render('index', {
        peppa: 'peppa.png'
    });
});

app.get('/', (request, response) => {
    response.render('index', {
        number: '',
        letter: '',
        hint: ''
    });
});

app.get('/noshameforpig', (request, response) => {
    response.render('index', {
        number: '777',
        letter: 'PIG',
        hint: 'YOU WON'
    });
});

app.get('*', function(request, response){
    //res.send('what???', 404);
    response.redirect('https://www.youtube.com/watch?v=klQxSwMJEbU');

    //https://www.youtube.com/watch?v=klQxSwMJEbU
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});