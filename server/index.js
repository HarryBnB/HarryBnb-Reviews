/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const expressStaticGzip = require('express-static-gzip');

const logic = require('./logic.js');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile.js')[environment];
// eslint-disable-next-line import/order
const knex = require('knex')(configuration);

const app = express();

const port = process.env.PORT || 3009;
const url = `http://localhost:${port}`;
const publicPath = path.join(__dirname, '/../public');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', expressStaticGzip(publicPath, { enableBrotli: true, orderPreference: ['br'] }));

app.get('/reviews/:roomId', (req, res) => {
  console.log('got get request', req.headers);
  const { roomId } = req.params;
  knex
    .select()
    .from('reviews')
    .whereIn('room_id', [roomId])
    .then(
      (data) => {
        const newData = logic.transformReviews(roomId, data);
        res.send(newData);
        console.log('APP GET SUCCESS');
      },
    )
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Listening at ${url}`);
});
