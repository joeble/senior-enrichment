import React from 'react';
import Navbar from './Navbar';

const Root = ({children}) => {
  return (
    <div>
      <Navbar />
      { children }
    </div>
  )
}

export default Root;
