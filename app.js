/* dependencies */
const express = require('express');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const bodyParser = require('body-parser');

const User = require('./models/user'); 
const secret = require('./config/secret');
const config = require('./config/secret');
/*express */
const app = express();

const homeRoute = require('./routers/index');
const aboutRoute = require('./routers/about');
const productsRoute = require('./routers/archive');
const contactRoute = require('./routers/contact');
 
/* view engine */
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.use(express.static('public'));
/* middleware */
app.use(homeRoute);
app.use(aboutRoute);
app.use(productsRoute);
app.use(contactRoute);
app.use(express.static(__dirname + '/public'));


/* server */
app.listen(config.port, () => {
	 console.log(`app is listening on port ${config.port}`);
});