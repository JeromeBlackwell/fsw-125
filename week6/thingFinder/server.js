const express = require("express");
const app = express();
const morgan = require("morgan");

//port...
const PORT = 5000

// middleware...
app.use(morgan("dev")) 
app.use(express.json()); 

//routes
app.use("/inventoryItems", require("./routes/inventoryItemRouter"))

// error handling...
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

//listening...
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});