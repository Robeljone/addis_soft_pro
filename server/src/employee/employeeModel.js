import mongoose from "mongoose";
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let employeeSchema = new Schema({
    fullName : {type:String, default : null},
    date_of_b : {type:String, default : null},
    gender: {type:String, default : null},
    salary: {type:String, default : null}
},{timestamps : true
});

employeeSchema.plugin(AutoIncrement, {inc_field: 'employeeId'});
const employee = mongoose.model('employee', employeeSchema);
module.exports = employee;