const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const Function_X_Schema = new mongoose.Schema({
    fx: {
        type: String,
        require: true
    },
    x0: {
        type: Number,
        require: true
    }
}, { collection : 'function_X' });

module.exports = Function_X = mongoose.model("function_x", Function_X_Schema);