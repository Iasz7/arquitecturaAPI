const container = require("./arquitectura-api/src/startup/container");
const {MONGO_URI} = container.resolve("config")

const server = container.resolve("app")

//const {MONGO_URI} = container.resolve("config");

const mongoose = require("mongoose");
mongoose.set('strictQuery', false); // Usa strictQuery para versiones más recientes de Mongoose
mongoose.connect(MONGO_URI)
.then(()=>{
    console.log('Connected to MongoDB');
    server.start()}
)
.catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });