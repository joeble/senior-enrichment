import React from 'react';
import {Link} from 'react-router-dom'

export default function CampusItem (props){

  const { id, name } = props.me;

  return (
    <div className={`campus${name}`}>
      <Link className="campusLink" to={`/campuses/${id}`}><img src={`/images/${id}.jpg`} />{name}</Link>
    </div>
  )
}

