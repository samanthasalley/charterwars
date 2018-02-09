const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

const TwilioController = {};

TwilioController.newSubscriber = (req, res, next) => {
  client.messages.create({
    body: `You have a new Charter Wars subscriber named ${req.body.name}!`,
    to: '+16102205920',
    from: '+12673968861'
  })
    .then((message) => next())
    .catch(err => {
      console.log('an error occurred sending new sub text', err);
      next();
    });
};

TwilioController.lostSubscriber = (req, res, next) => {
  client.messages.create({
    body: `Someone unsubscribed from Charter Wars: ${req.body.email}!`,
    to: '+16102205920',
    from: '+12673968861'
  })
    .then((message) => next())
    .catch(err => {
      console.log('an error occurred sending unsub text', err);
      next();
    });
};

module.exports = TwilioController;