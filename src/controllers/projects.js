const mongoose = require('mongoose');
const Project = require('../models/Project');

const findAllProjects = (req,res) => {
    Project.find((err,projects)=> {
        err && res.status(500).send(err.message);

        res.status(200).json(projects)
    })
}

const findById = (req,res) => {
    Project.findById(req.params.id, (err, project) => {
        err && res.status(500).send(err.message);

        res.status(200).json(project);        
    })
}

const addProject = (req,res) => {
    let project = new Project({
        id: req.body.id,
        name: req.body.name,
        code: req.body.code,
        tech: {
            responsive: req.body.responsive,
            auth: req.body.auth,
            sass: req.body.sass,
            db: req.body.db,
            ls: req.body.ls,
            api: req.body.api,
            customHook: req.body.customHook
        },
        repo: req.body.repo,
        img: req.body.img,
        gif: req.body.gif,
        route: req.body.route,
        descripcion: req.body.descripcion,
        description: req.body.description
    });

    project.save((err,prj) => {
        err && res.status(500).send(err.message);

        res.status(200).json(prj);
    })
}

module.exports = {findAllProjects, findById, addProject}