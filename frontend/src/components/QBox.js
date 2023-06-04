import React from 'react'
import { Avatar } from "@material-ui/core";
import './css/QBox.css'

function QBox() {
  return (
    <div className="Box">
      <div className="Box__info">
        <Avatar src="" />
      </div>
      <div className="Box__question">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  )
}

export default QBox