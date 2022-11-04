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

module.exports = router;