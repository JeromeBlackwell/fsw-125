const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const bounty = [
    {
        first_name: "Jacob",
        last_name: "Brown",
        type: "Sith",
        living: true,
        price: 150000,
        _id: uuidv4()
    },
    {
        first_name: "Kyle",
        last_name: "Thomas",
        type: "Jedi",
        living: false,
        price: 90000,
        _id: uuidv4()
    },
    {
        first_name: "Alice",
        last_name: "Bernard",
        type: "Sith",
        living: true,
        price: 600000,
        _id: uuidv4()
    },
    {
        first_name: "David",
        last_name: "Juda",
        type: "Jedi",
        living: false,
        price: 35000,
        _id: uuidv4()
    }
];

// Routes

// get all 
bountyRouter.route("/")
.get((req, res) => {
    res.status(200).send(bounty)
})

// get one 
  bountyRouter.get("/:bountyId", (req, res) => {
      const bountyId = req.params.bountyId
      const foundBounty = bounty.find(bounty => bounty._id === bountyId)
      res.status(200).send(foundBounty)
})

// post
  bountyRouter.post("/", (req, res) => {
    const newBounty = req.body; 
    newBounty._id = uuidv4();
    bounty.push(newBounty);
    res.status(201).send(`Bounty has been successfully added to the database`);
});

// put
bountyRouter.route("/:bountyId")
.put((req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounty[bountyIndex], updateObject) 
    Object.assign(bounty[bountyIndex], updateObject);
    res.status(200).send(bounty[bountyIndex]);
})

// delete
  bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId  
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId) 
    bounty.splice(bountyIndex, 1) 
    res.status(200).send(`Bounty has been successfully deleted from the database`)
})
  
  module.exports = bountyRouter;