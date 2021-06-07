var express = require('express');
var app = express();
var {v4} = require ('uuid')
var todo = [

    { 'Todo':'Move Lawn', 'Completed':'yes', 'id':v4() }
// ]
,
// [
    { 'Todo':'Trim Bushes', 'Completed':'no', 'id':v4() }
// ]
,
// [
    { 'Todo':'Edge Lawn', 'Completed':'yes', 'id':v4() }
// ]
,
// [
    { 'Todo':'Water the Plants', 'Completed':'yes', 'id':v4() }   
]

app.get ('/todo', function(req, res) {
    res.send(todo);
});

app.listen(4000,function(req, res) {
    console.log('server running in 4000');
});
