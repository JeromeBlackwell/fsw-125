var express = require('express');
var app = express();

var bountyHunter = [

    {"BountyRoute": 'FirstName','Jacob' 'LastName':'Brown', }
]

app.get ('/BountyHunter', function(req, res) {
    res.send('bounterHunter');
});

app.listen(4000);
