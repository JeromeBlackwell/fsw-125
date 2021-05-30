const express = require ("express");
const router = express.Router ();


router.get('/', function(req, res) {
    res.send )'GET route on bounty.');
});

router.post('/', function(req, res) {
    res.send )'POST route on bounty.');
});

module.exports = router;