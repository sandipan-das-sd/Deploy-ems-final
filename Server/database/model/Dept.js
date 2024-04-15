const mongoose = require('mongoose');

const DeptSchema = new mongoose.Schema({
 
  deptID:{
    type: String,
    required:true,
  },
  deptName:{
    type :String,
    required:true,
  },

 deptcount:String,
});

const DeptModel = mongoose.model('depts', DeptSchema);

module.exports = DeptModel;
