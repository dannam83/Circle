import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import PostFormReducer from './PostFormReducer';
import EmployeesReducer from './EmployeesReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeesReducer,
  postForm: PostFormReducer
});
