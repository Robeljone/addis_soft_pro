import React from 'react';
import { updateEmployee} from '../../actions/employeeAction';
import {connect } from 'react-redux';
import history from '../../history'

class EmployeeDetails extends React.Component {
    constructor(props){
        super(props);
        const location = history.location
        this.state = location.state;
        this.handleUpdate = this.handleUpdate.bind(this);
    }

handleChangeFor = (propertyName) => (event) => {
    const { EmployeeDetails } = this.state;
    const EmployeeDetailss = {
      ...EmployeeDetails,
      [propertyName]: event.target.value
    };
    this.setState({ EmployeeDetails: EmployeeDetails });
  }

  handleUpdate(event) {
    event.preventDefault();
    console.log("this.state ", this.state)
    console.log("this.props ", this.props)
    this.props.updateEmployeeDetails(this.state.EmployeeDetails);
  }

  render(){

    return(
        <div className="EmployeeDetailsDetail">
            <h2>EmployeeDetails Detail</h2>
                <div>
                </div>
            {
                <form onSubmit={this.handleUpdate}>
                <div className="form-group">
                  <label htmlFor="firstName">FullName</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    autoComplete="off"
                    onChange={this.handleChangeFor('firstName')} value={this.state.EmployeeDetails.firstName}
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dbo"
                    name="dbo"
                    autoComplete="off"
                    onChange={this.handleChangeFor('dbo')} value={this.state.EmployeeDetails.dbo}
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Last Gender</label>
                  <input
                    type="text"
                    className="form-control"
                    id="gender"
                    name="gender"
                    autoComplete="off"
                    onChange={this.handleChangeFor('gender')} value={this.state.EmployeeDetails.gender}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                  UPDATE
                </button>
               </form>

              }
            
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      EmployeeDetailss: state.EmployeeDetailss
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
    updateEmployeeDetails : EmployeeDetails => dispatch(updateEmployeeDetails(EmployeeDetails))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(EmployeeDetailsDetails);