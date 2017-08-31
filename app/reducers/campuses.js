import axios from 'axios';

// ACTION TYPES
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const POST_CAMPUS = 'POST_CAMPUS';
const PUT_CAMPUS = 'PUT_CAMPUS_BY_ID';
const DELETE_CAMPUS = 'DELETE_CAMPUS_BY_ID';

// ACTION CREATORS
export const getCampuses = function(campuses) {
  return {
    type: GET_ALL_CAMPUSES,
    campuses
  }
};
export const postCampus = function (campus) {
  return {
    type: POST_CAMPUS,
    campus
  }
};
export const putCampus = function(campus) {
  return {
    type: PUT_CAMPUS,
    campus
  }
}
export const deleteCampus = function (id) {
  return {
    type: DELETE_CAMPUS,
    id
  }
};

// REDUCER
export default function campusesReducer (campuses = [], action) {
  switch (action.type) {

    case GET_ALL_CAMPUSES:
      return action.campuses;

    case POST_CAMPUS:
      return [...campuses, action.campus];

    // not sure about this
    case PUT_CAMPUS:
      return campuses.map(campus => {
        return (campus.id === action.campus.id)
        ? action.campus
        : campus
        });

    case DELETE_CAMPUS:
      return campuses.filter(campus => campus.id !== action.id);

    default:
      return campuses;
  }
}

// THUNK CREATORS
export const fetchCampuses = () => dispatch => {
  axios.get('api/campuses')
    .then(res => dispatch(getCampuses(res.data)))
    .catch(err => console.error(err));
};
export const addCampus = (campus) => dispatch => {
  axios.post('api/campuses', campus)
    .then(res => dispatch(postCampus(res.data)))
    .catch(err => console.error(err));
};
export const updateCampus = (id, campus) => dispatch => {
  axios.get('api/campuses', campus)
    .then(res => dispatch(putCampus(res.data)))
    .catch(err => console.error(err));
};
export const destroyCampus = (id) => dispatch => {
  dispatch(deleteCampus(id));
  axios.delete(`api/campuses/${id}`)
    .catch(err => console.error(err));
};
