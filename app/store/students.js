import axios from 'axios';

// ACTION TYPES
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const POST_STUDENT = 'POST_STUDENT';
const UPDATE_STUDENT_INFO = 'PUT_STUDENT_BY_ID';
const DELETE_STUDENT = 'DELETE_STUDENT_BY_ID';

// ACTION CREATORS
export const getStudents = function(students) {
  return {
    type: GET_ALL_STUDENTS,
    students
  }
};
export const postStudent = function (student) {
  return {
    type: POST_STUDENT,
    student
  }
};
export const putStudent = function(student) {
  return {
    type: UPDATE_STUDENT_INFO,
    student
  }
}
export const deleteStudent = function (id) {
  return {
    type: DELETE_STUDENT,
    id
  }
};

// REDUCER
export default function studentsReducer (students = [], action) {
  switch (action.type) {

    case GET_ALL_STUDENTS:
      return action.students;

    case POST_STUDENT:
      return [...students, action.student];

    // not sure about this
    case UPDATE_STUDENT_INFO:
      return students.map(student => {
        return (+student.id === +action.student.id)
        ? action.student
        : student
        });

    case DELETE_STUDENT:
      return students.filter(student => student.id !== +action.id);

    default:
      return students;
  }
}

// THUNK CREATORS
export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
    .then(res => dispatch(getStudents(res.data)))
    .catch(err => console.error(err));
};
export const addStudent = (student) => dispatch => {
  axios.post('/api/students', student)
    .then(res => dispatch(postStudent(res.data)))
    .catch(err => console.error(err));
};
export const updateStudent = (id, student) => dispatch => {
  axios.put(`/api/students/${id}`, student)
    .then(res => dispatch(putStudent(res.data)))
    .catch(err => console.error(err));
};
export const destroyStudent = (id) => dispatch => {
  dispatch(deleteStudent(id));
  axios.delete(`/api/students/${id}`)
    .catch(err => console.error(err));
};
