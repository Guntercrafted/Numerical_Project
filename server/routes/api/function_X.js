const express = require('express');
const router = express.Router();

const Function_LR = require('../../models/Function_X' );

router.get('/', async(req, res) => {
    try {
        Function_LR.find({}, function(err, data) {
                var roomMap = [];
    
                data.forEach(function(temp) {
                    roomMap[temp._id] = temp;
                });
                res.json(data);  

        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;