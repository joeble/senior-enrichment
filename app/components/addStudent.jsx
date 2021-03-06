import React, {Component} from 'react';
import store, {fetchCampuses, addStudent} from '../store';
import history from '../history';

export default class AddStudent extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.state.student.campusId = 1;

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({campus: {campusId: 1}})
  }

  componentDidMount() {
    store.dispatch(fetchCampuses());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleNameChange (event) {
    this.setState({ student: { name: event.target.value }, error: false});
    console.log(this.state.student.name, this.state.error);
  }

  handleEmailChange (event) {
    this.setState({ student: { email: event.target.value }, error: false});
    console.log(this.state.student.email, this.state.error);
  }

  handleCampusChange (event) {
    this.setState({ student: { campusId: event.target.value }, error: false});
    console.log(this.state.student.campusId, this.state.error);
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
      store.dispatch(addStudent(student))
      history.push('/');
    } else {
      this.setState({error: true});
    }
  }

  render() {
    const campuses = this.state.campuses;
    const error = this.state.error;
    return (
      <div>
        { !error && <p>This here adds a student.</p> }
        { error && <p> YOU NO TYPE GOOD!!!!!!!!</p> }
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
            </label>
          </div>
          <div>
          <label>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} />
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
