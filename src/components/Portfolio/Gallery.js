import React from 'react'
import { array } from 'prop-types'
import ImageLoader from 'react-loading-image'
import GalleryPhotoLoading from '../GalleryPhotoLoading'

const Gallery = ({galleries, match}) => {
  const renderGalleryInfo = (gallery) => {
    return (
      <div className="gallery-info" key={`${gallery.title}-info`}>
        <h3>{gallery.title}</h3>
        {gallery.description}
      </div>
    )
  }


  const renderGalleryImages = (gallery) => {
    return (
      <div className="gallery">
        { renderGalleryInfo(gallery) }
        {
          gallery.photos.map((photo, index) => {
            return (
              <ImageLoader
                key={`imageloader-${gallery.title}-${index}`}
                src={`https://vascosilva.site${photo.path}`}
                loading={() => <GalleryPhotoLoading />}
                image={props => <img
                  src={`https://vascosilva.site${photo.path}`}
                  key={`photo-${gallery.title}-${index}`}
                  alt={`${gallery.title}-${index}`}
                /> }
                error={() => <div>Error</div>}
              />
            )
          })
        }
      </div>
    )
  }

  const renderGallery = (gallery) => {
    return (
      <>
        { renderGalleryImages(gallery) }
      </>
    )
  }

  const getGallery = () => {
    if (!galleries) {
      return <></>
    } else {
      const gallery = galleries.find((gallery) => {
        console.log(gallery.slug.toString(), match.params.slug)
        return gallery.slug.toString() === match.params.slug
      })

      if (gallery) {
        return renderGallery(gallery)
      }

      return <></>
    }
  }

  return (
    <div>{ getGallery() }</div>
  )
}

Gallery.propTypes = {
  galleries: array.isRequired,
}

Gallery.displayName = 'Gallery'

export default Gallery
