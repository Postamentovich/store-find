const { Router } = require('express');
const StoreController = require('../controller/store.controller');

const router = Router();

router.get('/store', StoreController.findStore);

module.exports = router;
