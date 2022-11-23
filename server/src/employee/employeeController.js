import  employeeModel  from "./employeeModel";

class Employee {

} 

Employee.prototype.getEmployee = (req,res) => 
{
    employeeModel.find({},(err,employees) => {
        if(err){
            res.send(err);
        }else{
            console.log("result customers", employees);
            res.send({'success':true,'message':'employees fetched successfully',employees});
        }
    })
}

employee.prototype.getemployeeById = (req,res) => 
{
    let id = req.params.id;
    employeeModel.findById(id,(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

employee.prototype.getemployeeByEmpId = (req,res) => 
{
    let id = req.body.id;
    employeeModel.findOne({employeeId : id},(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send({'success':true,'message':'employee fetched successfully',result});
        }
    })
}

employee.prototype.addEmployee = (req,res) => 
{
    let obj = req.body;
    console.log("obj ", obj);
    let model = new employeeModel(obj);
    console.log("model ", model);
    model.save((err,result)=>
    {
        if(err){
            res.send(err);
        }else{
            res.send({'success':true,'message':'employee fetched successfully',result});
        }
    })
}

employee.prototype.updateemployeeById = (req,res) => 
{
    let id = req.body._id;
    employeeModel.findByIdAndUpdate(id,{ fullName : req.body.fullName},(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

employee.prototype.deleteemployeeById = (req,res) =>
 {
    let id = req.body._id;
    console.log("delete employee ", req.body);
    employeeModel.findByIdAndRemove(id,(err,result) => 
    {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

module.exports = employee;
