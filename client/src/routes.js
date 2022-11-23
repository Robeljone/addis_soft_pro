import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home'

import Employees from './components/Employee/employee'
import CreateEmployee from './components/Employee/CreateEmployee'
import EmployeeDetails from "./components/Employee/EmployeeDetails";


const routing = () =>(
    <div>
    <Switch>
    <Route exact path="/" component={Home} label="Home"/>

        <Route path="/employees" component={Employees} />
        <Route path="/employee/view" component={EmployeeDetails} />
        <Route path="/employee/new" component={CreateEmployee} />
    
    </Switch>
    </div>
)
export default routing;


