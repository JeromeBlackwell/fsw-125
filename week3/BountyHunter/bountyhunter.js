var express = require ('Express');
var router = express.Router();

router.get ('/', function (req, res) {
    res.send ('GET route on bountyhunter.');
});
router.post ('/', function (req, res) {
    res.send ( 'Post route on bountyhunter.');
});

module.exports = router;
