const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

const {authHandler} = require("./middleware/authHandler");
const authController = require("./controllers/auth");

router.route('/login')
    .post(authController.login);

const userController = require('./controllers/user');

// User routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);
router.use('/users/self', authHandler);
router.route('/users/self')
    .get(userController.view)
    .patch(userController.update)
    .delete(userController.delete);

const productController = require('./controllers/product');

// Product Routes
router.route('/products')
  .get(productController.index)
  .post(authHandler, productController.new);
router.route('/products/:product_id')
  .get(productController.view)
  .patch(authHandler, productController.update)
  .delete(authHandler, productController.delete);

const orderController = require('./controllers/order');

// Order Routes
router.route('/orders')
  .get(orderController.index)
  .post(orderController.new);
router.route('/orders/:order_id')
  .get(orderController.view)
  .patch(orderController.update)
  .delete(orderController.delete);
  
module.exports = router;
