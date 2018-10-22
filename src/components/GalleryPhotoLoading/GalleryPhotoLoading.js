import React from 'react'
import Loading from '../Loading'
import './GalleryPhotoLoading.css'

const GalleryPhotoLoading = () => {
  return (
    <div className="gallery-loading">
      <div className="gallery-loading-cont">
        <Loading />
      </div>
    </div>
  )
}

GalleryPhotoLoading.displayName = 'GalleryPhotoLoading'

export default GalleryPhotoLoading
