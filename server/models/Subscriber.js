const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriberSchema = ({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true}
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;