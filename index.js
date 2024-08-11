const express = require("express");
const cors = require("cors");
const empModel = require('./model');
const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require('./connection');
app.use(cors())
app.use(express.json())
//Write missing code here

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

// Write GET API Code
app.get ('/get', async (req, res) => {
  try {
      const emp = await empModel.find();
      console.log (emp);
      res.send (emp)
  } catch (error) {
      console.error('Error fetching employees:', error);
      res.status(500).json({ error: 'An error occurred while fetching employees' });
  }
})

app.listen(PORT, () => {
  console.log('${PORT} is up and running');
});
