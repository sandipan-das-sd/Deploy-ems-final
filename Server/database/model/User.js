const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  user_sex: String,
  user_address: String,
  user_zip: String,
  user_city: String,
  user_state: String,
  user_district: String,
  user_phone: String,
  user_birthday: Date,
  user_docx: String,
  user_department: String,
  user_workingtype: String,
  user_doj: Date,
  user_emergencyphneno: String,
  index: String,
  staffcount: String,
});

const UserModel = mongoose.model('staffs', UserSchema);

module.exports = UserModel;
