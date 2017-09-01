import axios from 'axios';

// ACTION TYPE
const GET_STUDENT = 'GET_STUDENT_BY_ID';

// ACTION CREATOR
export const getStudent = function (student) {
  return {
    type: GET_STUDENT,
    student
  }
}

// REDUCER
export default function studentsReducer (student = {}, action) {
  switch (action.type) {

    case GET_STUDENT:
      return action.student;

    default:
      return student;
  }
}

// THUNK
export const fetchStudent = (id) => dispatch => {
  axios.get(`/api/students/${id}`)
    .then(res => dispatch(getStudent(res.data)))
    .catch(err => console.error(err));
};
