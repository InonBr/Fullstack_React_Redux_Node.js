const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();

// @route:  GET api/auth
// @desc:   Test route
// @access: Pablic
router.get('/', auth, (req, res) => res.send('Auth routes'));

module.exports = router;
