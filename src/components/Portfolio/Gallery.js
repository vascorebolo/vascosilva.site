import React, { Component } from 'react'
import { array, any } from 'prop-types'

import styled from 'styled-components'
import ImageLoader from 'react-loading-image'
import Media from 'react-media'
// import MetaTags from 'react-meta-tags'
import Helmet from 'react-helmet'
import { animateScroll } from 'react-scroll'

import GalleryPhotoLoading from '../GalleryPhotoLoading'
import Loading from '../Loading'
import Button from 'components/Button'

const GalleryDesktopWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 0 30px 360px;
  min-width: 150px;
  z-index: 1;

  .error + .error {
    display: none;
  }

  .loading-div + .loading-div {
    display: none;
  }

  .loading-div {
    align-self: center;
  }

  .img-wrapper {
    background: white;
    height: 100%;
    padding-right: 20px;

    :last-child {
      margin-right: 0;
    }

    img {
      height: 100%;
    }
  }
`

class Gallery extends Component {
  static propTypes = {
    galleries: array.isRequired,
    match: any.isRequired,
  }

  constructor(props) {
    super(props)

    this.sliderRef = React.createRef();
  }

  componentDidUpdate() {
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

  scrollBack = () => {
    document.getElementById('scroll-container').scrollLeft = 0
  }

  renderDesktopGallery(gallery) { // Desktop
    let items = []

    // items.push(this.renderGalleryInfo(gallery))

    gallery.photos.forEach((photo, index) => {
      items.push(
        <div key={`imageloader-${gallery.title}-${index}`} className="img-wrapper">
          <ImageLoader
            src={`https://vascosilva.site${photo.path}`}
            loading={() => <Loading />}
            image={props => <img
              src={`https://vascosilva.site${photo.path}`}
              key={`photo-${gallery.title}-${index}`}
              alt={`${gallery.title}-${index}`}
            /> }
            error={() => <div class="error">Error loading images <span role="img" aria-label="warning">⚠️</span></div>}
          />
          <div style={{ fontSize: '12px' }}>
            { photo.meta.title }
          </div>
        </div>
      )
    })

    items.push(
      <Button callback={this.scrollBack} key="button-back">
        ←
      </Button>
    )

    return items
  }


  renderGalleryImages = (gallery) => { // Mobile
    return (
      <div className="gallery">
        { this.renderGalleryInfo(gallery) }
        {
          gallery.photos.map((photo, index) => {
            return (
              <div key={`imageloader-${gallery.title}-${index}`}>
                <ImageLoader
                  src={`https://vascosilva.site${photo.path}`}
                  loading={() => <GalleryPhotoLoading />}
                  image={props => <img
                    src={`https://vascosilva.site${photo.path}`}
                    key={`photo-${gallery.title}-${index}`}
                    alt={`${gallery.title}-${index}`}
                  /> }
                  error={() => <div>Error loading images <span role="img" aria-label="warning">⚠️</span></div>}
                />
                <div style={{ fontSize: '12px' }}>
                  { photo.meta.title }
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  goToTop = () => {
    animateScroll.scrollToTop()
  }

  renderMobileGallery = (gallery) => {
    return (
      <>
        { this.renderGalleryImages(gallery) }
        <Button callback={this.goToTop} style={{ width: '100%' }}>back to top</Button>
      </>
    )
  }

  handleWheel = (e) => {
    document.getElementById('scroll-container').scrollLeft += e.deltaY
  }

  getGallery = () => {
    const { galleries, match } = this.props

    if (!galleries) {
     return <></>
    } else {
     const gallery = galleries.find((gallery) => {
       return gallery.slug.toString() === match.params.slug
     })

     if (gallery) {
       return (
         <>
           {/*<MetaTags>
              <title>Vasco Silva</title>
              <meta name="description" content={gallery.description} />
              <meta property="og:title" content={`series - ${gallery.title}`} />
            </MetaTags>*/}
            <Helmet title={`series - ${gallery.title}`} />
            <Helmet description={gallery.description} />
           <Media query="(min-width: 880px)">
            {matches =>
              matches ?
                <>
                  { this.renderGalleryInfo(gallery) }
                  <GalleryDesktopWrapper onWheel={this.handleWheel} id="scroll-container">
                    { this.renderDesktopGallery(gallery) }
                  </GalleryDesktopWrapper>
                </>
              : (
                this.renderMobileGallery(gallery)
              )
            }
          </Media>
        </>
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
