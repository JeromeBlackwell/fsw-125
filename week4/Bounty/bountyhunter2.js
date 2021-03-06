var express = require ('Express');
var router = express.Router();

router.get ('/', function (req, res) {
    res.send ('GET route on bountyhunter.');
});
router.post ('/', function (req, res) {
    res.send ( 'Post route on bountyhunter.');
});

get('/', (req, res) => {
    
res.send(bountyhunter)
});

get('/:id', (req, res) => {
    const bountyId =req.params.id;
    const find = bountys.find(bounty => bounty._id === bountyId);

res.send(find)
})

.get('/:id', (req, res) => {
    const bountyId =req.params.id;
    const hunter = bountys.find(bounty => bounty._id === bountyId);

res.send(hunter)
})

.delete('/:id', (req, res) => {
    const bountyId= req.params.id;
    const type = bountys.type(bounty =>bounty._id === bountyId);
    bountys.splice(type, 1);

    res.send('Resource successfully deleted!')
})

.put('/:id', (req, res) => {
    const bountyId= req.params.id;
    const type = bountys.type(bounty =>bounty._id === bountyId);
    Object.assign(bounty[type], req.body);

    res.send('Resource successfully Updated!')
    })

module.exports = router;
