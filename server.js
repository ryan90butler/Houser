const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then(db => {
  console.log('connected')
  app.set('db', db);

});

app.use(session({
  name: 'Houser',
  secret: process.env.SESSION_SECRET,
  cookie: {
      expires:  5 * 24 * 60 * 60 *1000,
  },
  saveUninitialized: false,
  rolling: true,
  resave: false,
}));

// app.use(express.static(path.join(__dirname, 'client/build')));

app.use(checkDb());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  req.db.user_table.findOne({ email, password })
      .then(user => {
          if (!user) {
              return res.status(401).send({ success: false, message: 'it didnt work' });
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
  };
}

const port = process.env.PORT || 8000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );