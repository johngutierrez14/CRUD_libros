const express = require('express');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const cors = require('cors');

const dbOption = require('./src/database/database');
const routeBooks = require('./src/routes/books.routes')

const app = express();

app.set('port', process.env.PORT || 3000);

//Midlewares
app.use(myConnection(mysql, dbOption.dbOptions, 'pool'));
app.use(express.json());
app.use(cors());

//Routes
app.get('/', (req, res) => {
  res.send('Welcome to my API')
});

app.use('/api/books', routeBooks)

app.listen(app.get('port'), () => {
  console.log(`Server runnig on port ${app.get('port')}`);
});