import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import PostFormReducer from './PostFormReducer';
import PostEditReducer from './PostEditReducer';
import EmployeesReducer from './EmployeesReducer';
import PostsReducer from './PostsReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeesReducer,
  postCreate: PostFormReducer,
  postEdit: PostEditReducer,
  posts: PostsReducer
});
