const express = require("express");
const route = express.Router();
const { v4: uuidv4 } = require('uuid');

const shippers = [
  {
    company: "Walmart, LLC",
    goods: "air conditioners",
    type: true,
    date: 52621,
    status: "delivered",
    _id: uuidv4(),
  },
  {
    company: "Mercedes-Benz of North America",
    goods: "GL350",
    type: false,
    date: 52821,
    status: "in route",
    _id: uuidv4(),
  },
  {
    company: "Wegmans, LLC",    
    goods: "Poultry",
    type: true,
    date: 51521,
    status: "delivered",
    _id: uuidv4(),
  },
  {
    company: "Lockhead Martin Corporation",
    goods: "air plane engine",
    type: false,
    date: 70121,
    status: "delayed",
    _id: uuidv4(),
  },
  {
    company: "Walt Disney LLC, Orlando",
    goods: "building supplies",
    type: true,
    date: 62821,
    status: "in route",
    _id: uuidv4(),
  },
];

route

// get all...
  .get('/', (req, res, next) => {
    res.status(200).send(shipper);
  }) 

// get one...  
  .get('/:shipperId', (req, res, next) => {
    const shipperId = req.params.shipperId;
    const findShipper = shipper.find((shipper) => shipper._id === shipperId);
    if (!findShipper) {
      const error = new Error("Not found");
      res.status(500)
      return next(error);
    }
    res.status(200).send(findShipper);
  }) 

  // get ID...
  .get('search/_id', (req, res, next) => {
    const shipperId = req.query._id;
    const filteredShipper = shippers.filter((shipper) => shipper._id === shipperId);
    if (!filteredShipper) {
      const error = new Error("Not found");
      res.status(500)
      return next(error);
    }
    res.status(200).send(filteredShipper);
  })

  // get type... 
  .get('/search/type', (req, res, next) => {
    const type = req.query.type;
    console.log(type);

    if (!type) {
      const error = new Error("Valid type not found");
      res.status(500)
      return next(error);
    }
    const filteredShipper = jobs.filter(shipper => shipper.type === type);
    res.status(200).send(filteredShipper);
  }) 

// post one...
  .post('/', (req, res, next) => {
    const newShipper = req.body;
    newShipper._id = uuidv4();
    shippers.push(newShipper);

    res.status(201).send(newShipper);
  }) 

// edit one...
.put('/:shipperId', (req, res, next) => {
  const shipperId = req.params.ShipperId;
  const shipperIndex = shipper.findIndex((shipper) => shipper._id === shipperId);
  Object.assign(shipper[shipperIndex], req.body);
  res.status(201).send("Shipment Status has been updated");
})

// delete one...
  .delete('/:shipperId', (req, res, next) => {
    const shipperId = req.params.shipperId;
    const shipperIndex = shippers.findIndex((shipper) => shipper._id === shipperId);
    shippers.splice(shipperIndex, 1);

    res.send("Shipment has been deleted");
  });

module.exports = route;