import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import departmentsReducer from './departmentsReducer';
import selectedDepartmentReducer from './selectedDepartmentReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    departmentsReducer,
    selectedDepartmentReducer,
    apiReducer,
    form: formReducer
});
