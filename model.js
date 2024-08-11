const mongoose = require ('mongoose')
//Write missing code here
const schema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

const emp = mongoose.model ('emp', schema);
module.exports = emp