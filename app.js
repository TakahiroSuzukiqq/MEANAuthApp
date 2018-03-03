const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//#To setup the mongoose, inside the `()` the location of the db need to be described
// This time at fisrt create the database location inside the project which is the `database.js` inside the config folder 
mongoose.connect(config.db);  //#the const `config` refers to the variable `db` in `database.js`

mongoose.connection.on('connected', () => {
    console.log('Connected to the database ' + config.db);
});

mongoose.connection.on('Error', (err) => {
    console.log('Database error' + err);
});

//#To initialize app.js
const app = express();

//#To use the Express Router to seperate the user routes
const users = require('./routes/users');

//#To choose the port to use
const port = 3000;

//#To setup the CORS Middleware
app.use(cors());

//#To setup the Static Folder
app.use(express.static(path.join(__dirname, 'public')));   //#__dirname: current directory, `public` is the folder to be referred

//#To setup the Body Parser Middileware
app.use(bodyParser.json());

//#To setup the users routes
//#To go to the`/users` and passing the `users` variable
// e.g. `localhost:3000/users/xxxx` (xxxx=anything) will go to the users file `users.js` in the routes folder
app.use('/users', users)    

//#To create the index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//#To listen the port whatever passing in, and the callback
//#To setup the callback function, instead of using `, function(){}`, using arrow function like `, () => {}`
app.listen(port, () => {
    console.log('Server started on port ' + port);
});