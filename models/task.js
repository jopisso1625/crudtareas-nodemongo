const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }

})

//crea modelo
const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;