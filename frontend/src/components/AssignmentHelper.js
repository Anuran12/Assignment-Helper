import React from 'react'
import Header from './Header'
import Sidebar from "./Sidebar";
import Qfeed from './Qfeed';
import Widget from "./Widget";
import './css/AssignmentHelper.css'

function AssignmentHelper() {
  return (
    <div className='AssignmentHelper'>
        <Header/>
        <div className='contents'>
          <div className='content'>
            <Sidebar />
            <Qfeed />
            <Widget />
          </div>
        </div>
    </div>
  )
}

export default AssignmentHelper