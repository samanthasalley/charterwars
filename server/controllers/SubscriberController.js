const Subscriber = require('../models/Subscriber');

const emailValidation = new RegExp("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$", "i");

const SubscriberController = {};

SubscriberController.addSubscriber = (req, res, next) => {
  if (!req.body.email || !req.body.name || !emailValidation.test(req.body.email)) return res.status(400).send('Invalid request');

  const newSubscriber = new Subscriber({ name: req.body.name, email: req.body.email });

  newSubscriber.save()
    .then(createdSubscriber => next())
    .catch(err => res.status(400).send({ err: 'Could not subscribe' }));
};

SubscriberController.deleteSubscriber = (req, res, next) => {
  if (!req.body.email || !emailValidation.test(req.body.email)) return res.status(400).send('Invalid request');

  Subscriber.remove({ email: req.body.email })
    .then(success => next())
    .catch(err => res.status(400).send({ err: 'Could not unsubscribe' }));
};

SubscriberController.getSubscriber = (req, res) => {
  Subscriber.find({ name: req.params.name })
    .then(found => res.status(200).send(found))
    .catch(err => res.status(400).send(err));
};

module.exports = SubscriberController;