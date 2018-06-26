const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive = require('massive');
require('dotenv').config();

const port = process.env.SERVER_PORT || 3018;
const app = express();

massive(process.env.CONNECTION_STRING).then( db => {
    console.log('Database connection established')
    app.set('db', db)
}).catch(error => console.log('You have an error', error))

app.use(bodyParser.json());

app.get('/api/inventory', ctrl.read);
app.post('/api/product', ctrl.create);

app.listen(port, () => console.log(`Living in ${port}`));