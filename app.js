
//to start all this you ran 'npm init' which generated a package.json file
// you then ran 'npm install express' to generate all the node modules
//for express
//for the db you run 'npm install pg'
// create thius file that you're currently in - app.js
// create a db.js file to make configure you db -> see that file
const express = require('express');
const app = express();
const port = 3000;
const pool = require('./db');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/users', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => console.log(`App listening at http://localhost${port}`));