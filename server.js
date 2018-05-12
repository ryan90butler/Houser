const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();
//middleware setup
const middleware = require('./server/middleWare');
const houseEndpoints = require('./server/houseEndpoints');
const authEndpoints = require('./server/authEndpoints');

massive(process.env.CONNECTION_STRING)
    .then((db)=>{
    console.log('the server is connected');
    app.set('db', db);
    })
    .catch(err => {
    console.warn('Failed to connect:');
    console.error(err);
});
app.use(cors());
app.use(bodyParser.json());
app.use(middleware.checkDb(app));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(session({
  name: 'Houser',
  secret: process.env.SESSION_SECRET,
  cookie: {
      expires:  5 * 24 * 60 * 60 *1000,
  },
  saveUninitialized: true,
  resave: false,
}));
//auth routes
app.get(`/api/logout`, authEndpoints.logout);
app.post('/api/login', authEndpoints.login);
app.post('/api/register', authEndpoints.register);
//house routes
app.get(`/api/properties`, houseEndpoints.properties)
app.post('/api/addProperty', houseEndpoints.addProperty);
app.delete(`/api/remove/:id`, houseEndpoints.removeProperty);
const port = process.env.PORT || 8000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );