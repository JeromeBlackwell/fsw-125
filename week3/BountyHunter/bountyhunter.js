var express = require ('Express');
var router = express.Router();

router.get ('/', function (req, res) {
    res.send ('GET route on bountyhunter.');
});
router.post ('/', function (req, res) {
    res.send ( 'Post route on bountyhunter.');
});

.get('/:id', (req, res) => {
    const bountyId =req.params.id;
    const hunter = bountys.find(bounty => bounty._id === bountyId);

res.send(hunter)

.delete('/:id', (req, res) => {
    const bountyId= req.params.id;
    const type = bountys.type(bounty =>bounty._id === bountyId);
    bountys.splice(type, 1);

    res.send('Resource successfully deleted!')
})

module.exports = router;
