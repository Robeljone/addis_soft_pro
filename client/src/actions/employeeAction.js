import {GET_EMPLOYEES, ADD_EMPLOYEE,DELETE_EMPLOYEE } from '../constants/ActionTypes';
import axios from "axios";
import history from '../history'
const API_URL = 'http://localhost:3001/api/';

export const getEmployees = () => dispatch => {
    return fetch(API_URL+'EMPLOYEES')
    .then((response) => {
        return response.json();
       })
      .then(result => {
        console.log("EMPLOYEES actions ", result);
        dispatch({
            type: GET_EMPLOYEES,
            payload: result.employee
          });
      });
    }


    export const addEmployee = (employee) => {
        console.log("employee ", employee);
            return (dispatch) => {
                return axios.post(API_URL+'employee/', employee)
                    .then((res) => {
                        console.log("response ", res);
                        dispatch({ type: ADD_EMPLOYEE, payload : res.data.result })
                        history.push(`/employee`)

                    });
            }
          }
    
    export const updateEmployee = (employee) => {
            console.log("udpate employee ", employee);
                return (dispatch) => {
                    return axios.put(API_URL+'employees/', employee)
                        .then((res) => {
                            console.log("response ", res);
                            
                            history.push(`/employees`)
                        });
                }
    }

    export const deleteEmployee = (employee) => {
        return (dispatch) => {
            return axios.delete(API_URL+'employee', {data : employee})
                .then((res) => {
                    dispatch({ type: DELETE_EMPLOYEE, payload : employee })
                });
        }
    }
