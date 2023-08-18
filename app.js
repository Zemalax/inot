const audit = require('express-requests-logger');
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('static'))
app.use(bodyParser.json());
app.use(cors({origin:true,credentials: true}));
//app.use(audit())

/*app.use((req, res, next) => {
    console.log(req);
    next();
});*/


app.post('/handler', (request, response) => {
    console.log(request.body)
    const body = request.body;

    response.setHeader('Content-type', 'application/json; charset=UTF-8')

    if (body.data === "jeppa") {
        //response.redirect('https://www.youtube.com/watch?v=klQxSwMJEbU');
        response.send({url: '/jeppa'});
        return
    }

    response.send({url: 'https://www.youtube.com/watch?v=klQxSwMJEbU'});

    /*response.render('index', {
        subject: 'EJS template engine',
        name: 'our template',
        link: 'https://google.com'
    });*/

});

app.get('/jeppa', (request, response) => {
    response.render('index', {
        number: '1',
        letter: 'A',
        hint: 'no hint'
    });
});

app.get('/', (request, response) => {
    response.render('index', {
        number: '',
        letter: '',
        hint: ''
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