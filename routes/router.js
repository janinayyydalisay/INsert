const express = require('express');
const router = express.Router();
const janinay = require('../controller/janine');

router.get('/',janinay.index);
router.post('/save',janinay.save);

module.exports = router;