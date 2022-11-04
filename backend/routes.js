const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

const userController = require('./controllers/user');

// User routes
router.route('/users')
  .get(userController.index)
  .post(userController.new);
router.route('/users/:user_id')
  .get(userController.view)
  .patch(userController.update)
  .delete(userController.delete);

const productController = require('./controllers/product');

// Order Routes
router.route('/products')
  .get(productController.index)
  .post(productController.new);
router.route('/products/:product_id')
  .get(productController.view)
  .patch(productController.update)
  .delete(productController.delete);

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
