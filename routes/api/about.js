const router = require('express').router();
const aboutController = require('../../controllers/aboutController');

// Matches with "/api/about"
router.route('/')
.get(aboutController.findAll);

module.exports = router;

