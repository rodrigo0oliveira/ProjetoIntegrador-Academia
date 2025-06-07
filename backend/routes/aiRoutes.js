const express = require('express');
const router = express.Router();

const {
    sendRequestToAI
} = require('../controllers/aiController');

router.post('/', sendRequestToAI);



module.exports = router;
