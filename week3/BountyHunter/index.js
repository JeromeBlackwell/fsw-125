var express = require('express');
var app = express();
var {v4} = require ('uuid')
var bountyHunter = [

    { 'firstName':'Jacob', 'lastName':'Brown', 'living':'yes', 'bountyAmount': 150000, 'type':'Sith', 'id':v4() }
// ]
,
// [
    { 'firstName':'Kyle', 'lastName':'Thomas', 'living':'no', 'bountyAmount': 90000, 'type':'Jedi', 'id':v4() }
// ]
,
// [
    { 'firstName':'Alice', 'lastName':'Bernard', 'living':'yes', 'bountyAmount': 600000, 'type':'Sith', 'id':v4() }
// ]
,
// [
    { 'firstName':'David', 'lastName':'Juda', 'living':'yes', 'bountyAmount': 350000, 'type':'Jedi', 'id':v4() }   
]

app.get ('/BountyHunter', function(req, res) {
    res.send(bountyHunter);
});

app.listen(4000,function(req, res) {
    console.log('server running in 4000');
});
