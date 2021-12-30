const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    id: {type: Number},
    name: {type: String},
    code: {type: String},
    tech: {
        responsive: {type: Boolean},
        auth: {type: Boolean},
        sass: {type: Boolean},
        db: {type: Boolean},
        ls: {type: Boolean},
        api: {type: Boolean},
        customHook: {type: Boolean}
    },
    repo: {type: String},
    img: {type: String},
    gif: {type: String},
    route: {type: String},
    descripcion: {type: String},
    description: {type: String},

})

module.exports = Project = mongoose.model('Project', ProjectSchema);