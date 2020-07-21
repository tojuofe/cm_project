const express = require('express');
const router = express.Router();
const {
  postProfile,
  getAllProfile,
  getProfile,
} = require('../controllers/profile');
const auth = require('../middleware/auth');

router.route('/').post(auth, postProfile).get(auth, getAllProfile);
router.route('/me').get(auth, getProfile);

module.exports = router;
