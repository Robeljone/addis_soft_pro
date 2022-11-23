import {GET_EMPLOYEES, VIEW_EMPLOYEE, ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE, ADD_EMPLOYEE} from '../constants/ActionTypes'
const initialState = {
   employees : [],
   employee : {}
}
constemployeeReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_EMPLOYEE:
            return {
                ...state,
                employees : [...state.employees,...action.payload]
            }
        case GET_EMPLOYEES:
        return {
            ...state,
            employees : action.payload,
            employee : {
                isSingleemployeeView : false
            }
        }

        case DELETE_EMPLOYEE:
            let employees = state.employees.filter(employee =>
                employee._id !== action.payload._id
            )
            return {
                ...state,
                employees : employees
            }

        case UPDATE_EMPLOYEE:
        return {
            ...state,
           employee : {isSingleemployeeView : false},
           refreshList : false
        };

      case VIEW_EMPLOYEE:
            return {
                ...state,
               employees : action.payload,
               employee : {
                    isSingleEmployeeView : false
                }
            };
      default:
        return state
    }
}

export default employeeReducer;