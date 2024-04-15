const mongoose=require('mongoose')
const LeaveSchema=new mongoose.Schema({
    reason:{
        type:String,
        required:true
    },
    leave_startdate:{
        type:String,
        required:true
    },
    leave_enddate:{
        type:String,
        required:true

    },
    leave_description:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    leave_docx:{
        type:String,
        required:true
    },
    leaveCount:{
        type:String,
    }
   
});
const LeaveModel= mongoose.model("LeaveApplication",LeaveSchema);
module.exports = LeaveModel;



