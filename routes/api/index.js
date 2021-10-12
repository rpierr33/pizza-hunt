const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

//add prefix of `/pizza` to routes created in `pizza-routes.js `
router.use('/pizza', pizzaRoutes);
// router.get('/',(req,res) => {
// res.send('hello form just /api route!!')
// })

module.exports = router;
