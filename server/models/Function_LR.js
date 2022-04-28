const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const Function_LR_Schema = new mongoose.Schema({
    fx: {
        type: String,
        require: true
    },
    xl: {
        type: Number,
        require: true
    },
    xr: {
        type: Number,
        require: true
    }
}, { collection : 'function_LR' });

module.exports = Function_LR = mongoose.model("function_LR", Function_LR_Schema);