var express = require('express');
var app = express();

var bountyHunter = [

    { 'firstName':'Jacob', 'lastName':'Brown', 'living':'yes', 'bountyAmount': 150000, 'type':'Sith', 'id':'' }
]

[
    { 'firstName':'Kyle', 'lastName':'Thomas', 'living':'no', 'bountyAmount': 90000, 'type':'Jedi', 'id':'' }
]

[
    { 'firstName':'Alice', 'lastName':'Bernard', 'living':'yes', 'bountyAmount': 600000, 'type':'Sith', 'id':'' }
]

[
    { 'firstName':'David', 'lastName':'Juda', 'living':'yes', 'bountyAmount': 350000, 'type':'Jedi', 'id':'' }   
]

app.get ('/BountyHunter', function(req, res) {
    res.send('bounterHunter');
});

app.listen(4000);
