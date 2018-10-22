import React from 'react'
import loadingGif from './ajax-loader.gif'
import './Loading.css'

const Loading = () => {
  return (
    <div className="load">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  )
}


Loading.displayName = 'Loading'

export default Loading
