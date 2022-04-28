const mongoose = require('mongoose');
const { String, Number } = mongoose.Schema.Types;

const Function_Xs_Schema = new mongoose.Schema({
    fx: {
        type: String,
        require: true
    },
    x0: {
        type: Number,
        require: true
    },
    x1: {
        type: Number,
        require: true
    }
}, { collection : 'function_Xs' });

module.exports = Function_Xs = mongoose.model("function_xs", Function_Xs_Schema);