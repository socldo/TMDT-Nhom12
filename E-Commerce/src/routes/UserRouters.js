const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')
const authentication = require('../middleware/AuthMiddleware');

router.post('/sign-up', userController.createUser);
router.post('/sign-in', userController.userSignIn);
router.put('/update-user/:id', userController.updateUser);
router.delete('/delete-user/:id', authentication.authMiddleware , userController.deleteUser);
router.get('/getAll', authentication.authMiddleware, userController.getAll );
router.get('/getDetail/:id', authentication.authUserMiddleware, userController.getDetail);
router.get('/refresh-token', userController.refreshToken);


module.exports = router;