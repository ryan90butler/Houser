const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const path = require('path');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then((db)=>{
        console.log('the server is connected');
        app.set('db', db);
    })
    .catch(err => {
        console.warn('Failed to connect:');
        console.error(err);
    });

app.use(session({
  name: 'Houser',
  secret: process.env.SESSION_SECRET,
  cookie: {
      expires:  5 * 24 * 60 * 60 *1000,
  },
  saveUninitialized: true,
  resave: false,
}));

app.get(`/api/logout`, (req, res) =>{
    req.session.destroy();
    res.send({ success: true, message: 'Logged out successfully' });
})
app.use(checkDb());

app.get(`/api/properties`, (req, res) => {
    req.db.findProperties([req.session.user])
        .then(properties => {
            console.log(`properties are on the way`);
            res.send(properties)
        })
})

app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  req.db.user_table.findOne({ email, password })
      .then(user => {
          if (!user) {
              return res.status(401).send({ success: false, message: 'it did not work' });
          }
          req.session.user = user.user_id
          res.send({ success: true, message: 'Logged in successfully' });
      })
      .catch(err=>{
        console.log("invalid credentials")
      });
});

app.post('/api/register', (req, res) => {
  const { email, password } = req.body;

  req.db.user_table.insert({ email, password })
      .then(user => {
        req.session.user = user.user_id
          res.send({ success: true, message: 'logged in successfully' });
      })
      .catch(err =>{
        console.log(err)
      }

      );
});

app.post('/api/addProperty', (req, res) => {

    const { propertyName, propertyDescription, state, zip, address, city, imgUrl, loanAmount, monthlyMortgage, desiredRent } = req.body;

    req.db.insertProperty({ propertyName, propertyDescription, state, zip, address, city, imgUrl, loanAmount, monthlyMortgage, desiredRent, user_id:req.session.user
    })
        .then(user => {
            res.send({ success: true, message: 'property added' });
        })
        .catch(err =>{
          console.log(err)
        });
  });

  app.delete(`/api/remove/:id`, (req, res)=>{
    req.db.deleteProperty({ property_id: req.params.id})
        .then(newProperties =>{
            console.log('successfully removed')
            return req.db.findProperties(req)
        })
        .then(properties => {
            res.send(properties)
        })
        .catch(err =>{
            console.log(err)
          });
  })

function checkDb() {
  return (req, res, next) => {
      const db = app.get('db');

      if (db) {
          req.db = db;
          next();
      }
      else {
          res.status(500).send({ message: 'this died' });
      }
  }
  ;}

const port = process.env.PORT || 8000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );