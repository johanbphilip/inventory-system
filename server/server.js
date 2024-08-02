require("dotenv").config();
const PORT = process.env.PORT;

const connectDb = require("./dbConn");
const mongoose = require("mongoose");
const InventoryItem = require("./models/item.models");

const { getAllItems } = require('./controllers/getMethods.controller');
const itemsRouter = require('./routes/items.router')
const express = require("express");
const app = express();


// connect to MongoDB
connectDb();
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  // connecting to port only if database is connected
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});

// middleware
app.use(express.json());
app.use('/api/item', itemsRouter)

app.get('/', (req, res) => {
  res.status(200).send(`Hello there `);
});
// shows all items
app.get("/api/items", getAllItems);