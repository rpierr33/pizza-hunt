<<<<<<< HEAD
const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

router.use('/pizzas', pizzaRoutes);

module.exports = router;
=======
const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

//add prefix of `/pizza` to routes created in `pizza-routes.js `
router.use('/pizza', pizzaRoutes);
// router.get('/',(req,res) => {
// res.send('hello form just /api route!!')
// })

module.exports = router;
>>>>>>> 4e82fcf62b92f729ce4f9e4b733ae0e61d19d03d
