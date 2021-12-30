const ProjectController = require('../controllers/projects');
const express = require('express');

const router = express.Router();

router.get('/all', ProjectController.findAllProjects);

router.get('/:id', ProjectController.findById);

router.post('/add', ProjectController.addProject);

module.exports = router;