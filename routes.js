var router = new require('express').Router();

var controller = require('./controller');

router.post('/user', controller.CreateUser);
router.get('/user', controller.GetAllUser);
router.get('/user/id/:id', controller.GetUserId);
router.get('/user/name/:name', controller.GetUserName);
router.put('/user', controller.UpdateUser);
router.delete('/user/:id', controller.DeleteUser);

module.exports = router;
