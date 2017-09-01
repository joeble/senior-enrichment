import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store, {fetchCampuses, fetchStudents, destroyStudent} from '../../store';
import StudentItem from './item';
import history from '../../history';

export default class CampusList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleDelete(event) {
    console.log(`handling the delete..`)
    store.dispatch(destroyStudent(event.target.value));
    history.push('/students');
  }

  render (){
      const students = this.state.students;
      const campuses = this.state.campuses;
      console.log('inside lists')
      console.log(students);
      return (
      <div>
        {
          students.map(student => {
            return (
              <div key ={student.id}>
                <StudentItem me={student} /> attends the <Link className="planetLink" to={`/campuses/${student.campusId}`}>{campuses.find(campus => campus.id === student.campusId).name}</Link> campus. <button className="deleteMe" onClick={this.handleDelete} value={student.id}>X</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

