import React from 'react';
import StudentList from './student/list';
import {Link} from 'react-router-dom';

export default function Students (props) {
  return (
    <div>
      <p>This is the students page.</p>
      <div>
        <StudentList />
        <p />
      </div>
      <div className="secretBox">
        <Link className="secretLink" to="/addstudent">SECRET LINK: ADD STUDENT</Link>
      </div>
    </div>
  )
}
