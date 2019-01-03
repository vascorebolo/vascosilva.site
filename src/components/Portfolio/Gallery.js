import React, { Component } from 'react'
import { array, any } from 'prop-types'
import ImageLoader from 'react-loading-image'
import GalleryPhotoLoading from '../GalleryPhotoLoading'
import HorizontalScroll from 'react-scroll-horizontal'
import Media from 'react-media'
import Draggable from 'react-draggable'

class Gallery extends Component {
  static propTypes = {
    galleries: array.isRequired,
    match: any.isRequired,
  }

  state = {
    deltaX: 0,
  }

  renderGalleryInfo = (gallery) => {
    return (
      <div className="gallery-info" key={`${gallery.title}-info`}>
        <h3>{gallery.title}</h3>
        {gallery.description}
      </div>
    )
  }

  renderDesktopGallery(gallery) {
    let items = []

    items.push(this.renderGalleryInfo(gallery))

    gallery.photos.forEach((photo, index) => {
      items.push(
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

    return items
  }


  renderGalleryImages = (gallery) => {
    return (
      <div className="gallery">
        { this.renderGalleryInfo(gallery) }
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

  renderMobileGallery = (gallery) => {
    return (
      <>
        { this.renderGalleryImages(gallery) }
      </>
    )
  }

  handleDrag = (e,data) => {
    this.setState({ deltaX: data.deltaX * 2 })
  }

  getGallery = () => {
    const { galleries, match } = this.props
   if (!galleries) {
     return <></>
   } else {
     const gallery = galleries.find((gallery) => {
       console.log(gallery.slug.toString(), match.params.slug)
       return gallery.slug.toString() === match.params.slug
     })

     if (gallery) {
       return (
         <Media query="(min-width: 880px)">
          {matches =>
            matches ? (
              <Draggable
                axis="x"
                onDrag={this.handleDrag}
              >
                <div>
                  <HorizontalScroll
                    pageLock      = { true }
                    reverseScroll = { true }
                    animValues={this.state.deltaX}
                  >
                    { this.renderDesktopGallery(gallery) }
                  </HorizontalScroll>
                </div>
              </Draggable>
            ) : (
              this.renderMobileGallery(gallery)
            )
          }
        </Media>
       )
     }

     return <></>
   }
 }

  render() {
    return (
      <>{ this.getGallery() }</>
    )
  }
}

export default Gallery
