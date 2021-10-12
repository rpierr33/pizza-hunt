<<<<<<< HEAD
const router = require('express').Router();
const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza
} = require('../../controllers/pizza-controller');

// /api/pizzas
router
  .route('/')
  .get(getAllPizza)
  .post(createPizza);

// /api/pizzas/:id
router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

module.exports = router;
=======
const router = require('express').Router();

const {
    getALLPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza, 
} = require('../../controllers/pizza-controller');

// Set up Get all and Post at /api/pizzas 
router 
    .route('/')
    .get(getALLPizza)
    .post(createPizza);


// Set up Get one, Put, and Delete at /api/pizzas/ :id
router
    .route('/:id')
    .get(getPizzaById)
    .get(updatePizza)
    .delete(deletePizza);




module.exports = router;
>>>>>>> 4e82fcf62b92f729ce4f9e4b733ae0e61d19d03d
