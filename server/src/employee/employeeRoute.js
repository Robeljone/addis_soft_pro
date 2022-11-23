import express from "express";
import employeeController from "./employeeController";

const router = express.Router();
const controller = new employeeController();

router.post('/',controller.addEmployee);
router.get('/',controller.getEmployees);
router.get('/:id',controller.getEmployeeById);
router.get('/employee/:id',controller.getEmployeeByEmpId);
router.put('/',controller.updateEmployeeById);
router.delete('/',controller.deleteEmployeeById);

module.exports = router;


