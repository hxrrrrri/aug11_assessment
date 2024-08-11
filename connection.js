const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect("mongodb+srv://03adish:UyQsncVx7jpgjhBX@cluster0.rtmzcqp.mongodb.net/employeedetails?retryWrites=true&w=majority&appName=Cluster0"

  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });