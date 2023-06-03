import React from 'react'
import QBox from './QBox'
import './css/Qfeed.css'
import Post from './Post'

function Qfeed() {
  return (
    <div className='feed'>
        <QBox />
        <Post />
    </div>
  )
}

export default Qfeed