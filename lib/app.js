const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const ensureAuth = require('./auth/ensure-auth');
const CreateAuthRoutes = require('./auth/create-auth-routes');

//setup app base requirements
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(morgan('dev'));

//setup authentication routes that require a POST body with an email and password
const authRoutes = CreateAuthRoutes();
app.use('/auth', authRoutes );

//Everything beginning with a /api will require auth
app.use('/api', ensureAuth);

//creates users routes
app.use('/users', userRoutes);

//sets app to use error middleware
app.use(require('./middleware/error'));

module.exports = app;
