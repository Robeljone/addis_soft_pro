import express from 'express';
import employeeRoute from "../employee/employeeRoute";

const app = express();

app.use('/employees',employeeRoute);

module.exports = app;