const express = require("express");
const inventoryItemRouter = express.Router(); 
const { v4: uuidv4 } = require("uuid"); 

// Database
const inventoryItems = [
  {
    inventoryItem: "Banana",
    price: ".59",
    type: "food",
    _id: uuidv4(),
  },
  {
    inventoryItem: "Pants",
    price: "44.95",
    type: "cloinventoryItem",
    _id: uuidv4(),
  },
  {
    inventoryItem: "BasketBall",
    price: "60",
    type: "sporting goods",
    _id: uuidv4(),
  },
  {
    inventoryItem: "Rockem Sockem Robots",
    price: "29.99",
    type: "toy",
    _id: uuidv4(),
  },
  {
    inventoryItem: "shirt",
    price: "48",
    type: "cloinventoryItem",
    _id: uuidv4(),
  },
  {
    inventoryItem: "Jaden's Chocolate Chili",
    price: "",
    type: "food",
    _id: uuidv4(),
  },
];

//Get all...
inventoryItemRouter
     .get("/", (req, res) => {
     res.status(200).send(inventoryItems)
 })
 
 // Get by type...
     .get("/search/inventoryItems", (req, res, next) => {
     const type = req.query.type
 
     if(!type){
         const error = new Error("Invalid type")
         return next(error)
     }
     const filterInventoryItems = inventoryItems.filter(inventoryItem => inventoryItem.type === type)
     res.status(200).send(filterInventoryItems)
 });
 
 module.exports = inventoryItemsRouter