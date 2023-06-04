import React from 'react'
import { Avatar } from "@material-ui/core";
import './css/QBox.css'
import { selectUser } from '../feature/userSlice';
import { useSelector } from 'react-redux';


function QBox() {
  const user = useSelector(selectUser);
  return (
    <div className="Box">
      <div className="Box__info">
        <Avatar src={user?.photo} />
      </div>
      <div className="Box__question">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  )
}

export default QBox