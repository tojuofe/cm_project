const express = require('express');
const router = express.Router();
const { postStall, getStall } = require('../controllers/stall');
const auth = require('../middleware/auth');

router.route('/').post(auth, postStall);
router.route('/me').get(auth, getStall);

module.exports = router;
