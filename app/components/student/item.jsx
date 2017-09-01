import React from 'react';
import {Link} from 'react-router-dom'

export default function CampusItem (props){

  const { id, name} = props.me;
  const campus = props.campus;

  return (
      <Link className="studentLink"to={`/students/${id}`}>{name}</Link>
  )
}

