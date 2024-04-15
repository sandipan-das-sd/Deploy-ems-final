const mongoose =require("mongoose")
const SalarySchema =new mongoose.Schema({
    basic_salary:{
        type:String,
        required:true,
    },
    allowance:{
        type:String,
        required:true,
    },
    total:{
        type:String,
        required:true,

    }
})
const SalaryModel=mongoose.model("salary",SalarySchema)
module.exports=SalaryModel;