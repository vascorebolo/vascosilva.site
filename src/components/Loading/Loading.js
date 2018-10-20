import React from 'react'
import loadingGif from './ajax-loader.gif'

const Loading = () => {
  return <img src={loadingGif} alt="loading" />
}


Loading.displayName = 'Loading'

export default Loading
