
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const config = require('../config.js');
const app = express();
const swaggerDoc = require('./swagger.json');
const morgan = require('morgan');



const indexRouters = require('./components/routers/index')
//const get_products = require('./components/routers/get_products')



// Routers
app.use(bodyParser.json());
//app.use('/api/products', get_products);
app.use('/', indexRouters);
//app.use('/api/user', user);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.listen(config.api.port, () => {
    console.log('API escuchando en el puerto : ', config.api.port);

});

//Settings
app.set('views',path.join(__dirname, 'components/views'));
app.set('view.engine', 'ejs');


//middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
