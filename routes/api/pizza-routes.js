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
