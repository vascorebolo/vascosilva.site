import React from 'react'
import loadingGif from './ajax-loader.gif'
import './Loading.css'

const Loading = () => {
  return <img className="Loading" src={loadingGif} alt="loading" />
}


Loading.displayName = 'Loading'

export default Loading
