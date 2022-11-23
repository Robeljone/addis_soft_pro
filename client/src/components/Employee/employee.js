import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getemployees, deleteemployee} from '../../actions/employeeAction'
import './employees.css';
import history from "../../history"
class employees extends Component {

    constructor(props){
        super(props);
        this.viewemployee = this.viewemployee.bind(this);
    }

    componentDidMount() {
        this.props.getemployees();
      }
  static propTypes = {
    getemployees: PropTypes.func.isRequired,
    employees: PropTypes.object.isRequired
  }

deleteEmployee(employee){
      console.log(`delete employee `, employee);
      this.props.deleteEmployee(employee);
  }
  viewemployee = (viewemployeeDetails) => {
    console.log("this.state ", viewemployeeDetails);
     history.push('/employee/view', {'employee' : viewemployeeDetails})
  }

  render() {

    const { employees } = this.props.employees;

    const  employeeList = (
        <div>
          
        <div className="col-lg-12 table-responsive">
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Gender</th>
            <th scope="col">Salary</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>

        {
            employees.map((employee,index) =>
          <tr key={index}>
            <td>{employee.fullName}</td>
            <td>{employee.date_of_b}</td>
            <td>{employee.gender}</td>
            <td>{employee.salary}</td>
            <td> <i className="fa fa-edit btn btn-info" onClick={() => this.viewEmployee(employee)}> </i>   &nbsp;
            <i className="fa fa-trash btn btn-danger" onClick={()=>this.deleteEmployee(employee)}> </i></td>
          </tr>
        )
        }
        </tbody>
      </table>
      </div>
        </div>
        )
    return (
      <div className="row">
      <div className="col-lg-12">
              <Link to={`/employee/new`} ><button className="btn btn-success pull-right" >New Employee</button></Link>
        </div>
        <div className="col-lg-12 text-center">
            {
                employees.length ==0 ? 'No Employee Create New Employee' :employeeList
            }
            </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  employees: state.employees
})

const mapDispatchToProps = (dispatch) => ({
   getEmployee: () => dispatch(getEmployee()),
 deleteEmployee: (employee) => dispatch(deleteEmployee(employee))
})

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
