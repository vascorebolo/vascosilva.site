import React, { Component } from 'react'
import { array, any } from 'prop-types'
import ImageLoader from 'react-loading-image'
import GalleryPhotoLoading from '../GalleryPhotoLoading'
import HorizontalScroll from 'react-scroll-horizontal'
import Media from 'react-media'
import Draggable from 'react-draggable'
import Slider from 'react-slick'

class Gallery extends Component {
  static propTypes = {
    galleries: array.isRequired,
    match: any.isRequired,
  }

  state = {
    deltaX: 0,
  }

  constructor(props) {
    super(props)

    this.sliderRef = React.createRef();
  }

  componentWillUpdate() {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickGoTo(0, false)
    }
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
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
    }

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
              <Slider ref={this.sliderRef} {...settings}>
                { this.renderDesktopGallery(gallery) }
              </Slider>

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
