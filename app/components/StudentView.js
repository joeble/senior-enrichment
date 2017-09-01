import React, {Component} from 'react';
import store, {currentStudent, fetchStudent, fetchCampuses, updateStudent} from '../store';
import {Link} from 'react-router-dom';
import history from '../history';

export default class CampusView extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    // slices the /students/ off of the pathname
    this.id = parseInt(this.props.location.pathname.slice(10), 10);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    store.dispatch(fetchStudent(this.id));
    store.dispatch(fetchCampuses());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleNameChange (event) {
    this.setState({ currentStudent: { name: event.target.value }, error: false});
    console.log(this.state.currentStudent.name, this.state.error);
  }

  handleEmailChange (event) {
    this.setState({ currentStudent: { email: event.target.value }, error: false});
    console.log(this.state.currentStudent.email, this.state.error);
  }

  handleCampusChange (event) {
    this.setState({ currentStudent: { campusId: event.target.value }, error: false});
    console.log(this.state.currentStudent.campusId, this.state.error);
  }

  handleSubmit (event) {
    event.preventDefault();
    let error = this.state.error;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const campusId = event.target.campus.value
    if (name === '') {
      error = true;
    }
    if (!error) {
      const student = {
        name,
        email,
        campusId
      }
      store.dispatch(updateStudent(this.id, student));
      history.push('/');
    } else {
      this.setState({error: true});
    }
  }

  render (){
    const student = this.state.student;
    const campuses = this.state.campuses;
    const error = this.state.error;
    return (
      <div>
        <p>This is the student page for  {student.name}.</p>
        <p>Go ahead and email: <Link to="#">{student.email}</Link></p>
        { !error && <p>Update this student.</p> }
        { error && <p> YOU NO TYPE GOOD!!!!!!!!</p> }
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input type="text" name="name" value={this.state.currentStudent.name} onChange={this.handleNameChange} />
            </label>
          </div>
          <div>
          <label>
            Email:
            <input type="email" name="email" value={this.state.currentStudent.email} onChange={this.handleEmailChange} />
          </label>
        </div>
        <div>
        <label>
          Campus:
          <select name="campus" onChange={this.handleCampusChange}>
          {
            campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
          }
          </select>
        </label>
      </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
