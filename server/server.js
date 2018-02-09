require('./db/database');
require('dotenv').load();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const SubscriberController = require('./controllers/SubscriberController');
const TwilioController = require('./controllers/TwilioController');

const app = express();

const port = 3000;

app.use(express.static(path.resolve(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.post('/api/subscribe', 
  SubscriberController.addSubscriber, 
  // TwilioController.newSubscriber,
  (req, res) => res.status(201).send({ msg: `Thanks for subscribing, ${req.body.name}` })
);

app.post('/api/unsubscribe', 
  SubscriberController.deleteSubscriber,
  // TwilioController.lostSubscriber,
  (req, res) => res.status(200).send({ msg: `Sorry to see you go!` })
);

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));