import axios from 'axios';

// ACTION TYPE
const GET_CAMPUS = 'GET_CAMPUS_BY_ID';

// ACTION CREATOR
export const getCampus = function (id) {
  return {
    type: GET_CAMPUS,
    id
  }
}

// REDUCER
export default function campusReducer (currentCampus = {}, action) {
  switch (action.type) {

    case GET_CAMPUS:
      return action.campus

    default:
      return currentCampus;
  }
}

// THUNK
export const fetchCampus = (id) => dispatch => {
  axios.get(`api/campuses/${id}`)
    .then(res => dispatch(getCampus(res.data)))
    .catch(err => console.error(err));
};
