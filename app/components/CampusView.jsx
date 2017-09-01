import React, {Component} from 'react';
import store, {fetchCampus, fetchStudents} from '../store';
import StudentItem from './student/item'

export default class CampusView extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    // slices the /campuses/ off of the pathname
    this.id = parseInt(this.props.location.pathname.slice(10), 10);
  }

  componentDidMount() {
    store.dispatch(fetchCampus(this.id));
    store.dispatch(fetchStudents());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render (){
    const campus = this.state.campus;
    const students = this.state.students;
    // gets all the students for this campus
    const studentsHere = students.filter(student => student.campusId === campus.id);
    return (
      <div>
        <h3 className="campusLink">{campus.name} Campus:</h3>
        <img src={`/images/${campus.id}.jpg`} />
        <p>This is the {campus.name} campus. The folowing students are enrolled here..</p>
        <ol>
        {
          studentsHere.map(student => <li key={student.id}><StudentItem me={student} /></li> )
        }
        </ol>
      </div>
    )
  }
}

