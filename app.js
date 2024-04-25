const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

let views = 0;
let clickIds = [];
let customs = [];
let frauds = [];

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

    views = views + 1;

    if (req.query.clickid.startsWith("7")) {
        clickIds.push(req.query.clickid);
    } else {
        frauds.push(req.query.clickid);
    }


    customs.push(req.query.custom3);

    console.log(
        '\n', '--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--', '\n',
        'POSTBACK URL:', req.url,'\n',
        'POSTBACK GET BODY:', req.body,'\n',
        'POSTBACK GET HEADERS:', req.headers,'\n'
        )
    res.sendStatus(200)
});

app.post('/postback', (req, res) => {
    console.log(
        '\n', '--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--', '\n',
        'POSTBACK URL:', req.url,'\n',
        'POSTBACK POST BODY:', req.body,'\n',
        'POSTBACK POST HEADERS:', req.headers,'\n'
    )
    res.sendStatus(200)
});

app.get('/logs/get', (req, res) =>{
    console.log('\n')
    console.log('--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--')
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

app.get('/tracker', (request, response) => {
    response.render('pages/tracker', {
        views: views,
        clickIds: clickIds,
        customs: customs,
    })
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});