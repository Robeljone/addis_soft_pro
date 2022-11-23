import React, { Component } from 'react';
import {connect } from 'react-redux';
import {addemployee} from '../../actions/employeeAction'

class Createemployee extends Component {

    constructor() {
        super();
        this.state = {
            employee : {
                fullName : "",
                dbo : "",
                gender : "",
                salary : ""
            }
        };
        this.handleChangeFor = this.handleChangeFor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChangeFor = (propertyName) => (event) => {
        const { employee } = this.state;
        const employeeDetails = {
          ...employee,
          [propertyName]: event.target.value
        };
        this.setState({ employee: employeeDetails });
      }
      
      handleSubmit(event) {
        event.preventDefault();
        console.log("test ", this.state.employee)
        this.props.addemployee(this.state.employee);
      }
      render() {
    
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                autoComplete="off"
                onChange={this.handleChangeFor('fullName')} value={this.state.employee.fullName}
                />
            </div>
            <div className="form-group">
              <label htmlFor="dbo">Date of Birth</label>
              <input
                type="text"
                className="form-control"
                id="dbo"
                autoComplete="off"
                onChange={this.handleChangeFor('dbo')} value={this.state.employee.dbo}
                />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Gender</label>
              <input
                type="text"
                className="form-control"
                id="gender"
                autoComplete="off"
                onChange={this.handleChangeFor('gender')} value={this.state.employee.gender}
                />
            </div>
            <div className="form-group">
              <label htmlFor="salary">Salary</label>
              <input
                type="number"
                className="form-control"
                id="salary"
                autoComplete="off"
                onChange={this.handleChangeFor('salary')} value={this.state.employee.salary}
                />
            </div>
            <button type="submit" className="btn btn-success btn-lg">
              SAVE
            </button>
          </form>
        );
      }
}

const mapStateToProps = (state) => ({
  employee: state.employee
})

const mapDispatchToProps = (dispatch) => ({
    addemployee: (data) => dispatch(addemployee(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Createemployee);