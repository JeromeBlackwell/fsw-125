const express = require("express")

const app = express()

 

const freshwaterFish = [

    { name: 'Largemouth Bass'},

    { name: 'Smallmouth Bass'},

    { name: 'Striped Bass'},

    { name: 'Bluefish'}

 

]

 

const states = [

    { state: 'Maryland', city: 'Annapolis'},

    { state: 'Florida', city: 'Tallahasee'},

    { state: 'Georgia', city: 'Atlanta'},

    { state: 'California', city: 'Los Angeles'},

    { state: 'Massachussetts', city: 'Boston'}

]

 

const comfortFood = [

    { name: "Shrimp and Grits"},

    { name: "Jerk Chicken with Steamed Veggies, Rice and Peas"},

    { name: "Vietnamese Pho"},

    { name: "Grilled Red Snapper with Tropical Salsa"}

 

]

 

app.get('/freshwaterFish', (req, res) => {

    res.send(freshwaterFish);

});

 

app.get('/states', (req, res) => {

    res.send(states);

});

 

app.get('/comfortFood', (req, res) => {

    res.send(comfortFood);

});

 

app.listen(6000, () => {

    console.log("App is listening on port 6000!");

});