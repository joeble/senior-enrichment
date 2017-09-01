import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

import campuses from './campuses';
import campus from './campus';
import students from './students';
import student from './student';

const rootReducer = combineReducers({campuses, campus, students, student, error: false, currentStudent: student});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

export * from './campuses';
export * from './campus';
export * from './students';
export * from './student';
