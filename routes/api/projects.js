const router = require('express').router();
const projectsController = require('../../controllers/projectsController');

// Matches with "/api/projects"
router.route('/')
.get(projectsController.findAll)

module.exports = router;

