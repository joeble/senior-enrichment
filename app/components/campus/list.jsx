import React, {Component} from 'react';
import store, {fetchCampuses, destroyCampus} from '../../store';
import CampusItem from './item';
import history from '../../history';

export default class CampusList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    store.dispatch(fetchCampuses());
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleDelete(event) {
    console.log(`handling the delete..`)
    store.dispatch(destroyCampus(event.target.value));
    history.push('/');
  }

  render (){
      console.log(this.state);
      const campuses = this.state.campuses;
      return (
      <div className="campusList">
        {
          campuses.map(campus => {
            return (
              <div key={campus.id}>
            <CampusItem me={campus} />
            <button onClick={this.handleDelete} value={campus.id}>X</button>
              </div> )
          })
        }
      </div>
    )
  }
}

