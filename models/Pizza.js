<<<<<<< HEAD
const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
  pizzaName: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  size: {
    type: String,
    default: 'Large'
  },
  toppings: []
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;
=======
const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: []
  });

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//expoet the Pizza model
module.exports = Pizza;
>>>>>>> 4e82fcf62b92f729ce4f9e4b733ae0e61d19d03d
