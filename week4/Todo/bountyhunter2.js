var express = require ('Express');
var router = express.Router();

router.get ('/', function (req, res) {
    res.send ('GET route on todo.');
});
router.post ('/', function (req, res) {
    res.send ( 'Post route on todo.');
});

get('/:id', (req, res) => {
    const todoId =req.params.id;
    const list = todos.find(todo => todo._id === todoId);

res.send(list)

.delete('/:id', (req, res) => {
    const todoId= req.params.id;
    const type = todos.type(todo =>todo._id === todoId);
    todos.splice(type, 1);

    res.send('Resource successfully deleted!')
})

.put('/:id', (req, res) => {
    const todoId= req.params.id;
    const type = todos.type(todo =>todo._id === todoId);
    Object.assign(todo[type], req.body);

    res.send('Resource successfully Updated!')
    })
});
module.exports = router;