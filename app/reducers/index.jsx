import { combineReducers } from 'redux';

import campusesReducer from './campuses';
import campusReducer from './currentCampus';
import studentsReducer from './students';
import studentReducer from './currentStudent';

export default combineReducers({campusesReducer, campusReducer, studentsReducer, studentReducer});
