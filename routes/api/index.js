const router = require('express').router();
const projectsRoutes = require('./projects');
const aboutRoutes = require('./about')

// About and Projects routes
router.use('/projects', projectRoutes)
router.use('/about', aboutRoutes)

module.exports = router;