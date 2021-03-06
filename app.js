const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Database
const db=require('./config/database');

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

//test DB
db.authenticate().then(() => 'Database connected...').catch(err => 'Error: ' + err)

const app = express();

//Handlebars
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set static folder
app.use(express.static(path.join(__dirname,'public')));

//index route
app.get('/', (req, res) => res.render('index',{layout:'landing'}));

//Gig routes
app.use('/gigs',require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));