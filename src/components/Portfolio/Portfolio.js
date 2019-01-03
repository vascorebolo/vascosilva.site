import React, { Component } from 'react'
import Loading from '../Loading'
import './Portfolio.css'
import ImageLoader from 'react-loading-image'
import GalleryPhotoLoading from '../GalleryPhotoLoading'
import HorizontalScroll from 'react-scroll-horizontal'
import Media from 'react-media'
import Draggable from 'react-draggable'
import { Link, Route, Switch } from 'react-router-dom'
import Gallery from './Gallery'

class Portfolio extends Component {
  state = {
    galleries: [],
    gallery: null,
    isLoadingNames: true,
    deltaX: 0,
  }

  componentWillMount() {
    fetch('https://vascosilva.site/cms/api/collections/get/gallery?token=6b51bd66a3c69d41bdb2ac0f63de66')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ galleries: responseJson.entries, isLoadingNames: false })
      })
      .catch((error) => {
        console.error(error)
        throw error
      });
  }

  renderGalleryNames() {
    return this.state.galleries.map((gallery, index) => {
      const { match } = this.props

      return (
        <Route
          key={`gallery-${index}-2`}
          path={`${match.path}/:slug`}
          exact
          children={({ match }) => (
            <Link
              to={`${this.props.match.path}/${gallery.slug}`}
              key={`gallery-${index}`}
              className={`${match.params.slug.toString() === gallery.slug ? "active" : ""} gallery-button`}
            >
              { gallery.title }
            </Link>
          )}
        />
      )
    })
  }

  renderGalleryInfo(gallery) {
    return (
      <div className="gallery-info" key={`${gallery.title}-info`}>
        <h3>{gallery.title}</h3>
        {gallery.description}
      </div>
    )
  }

  renderGalleryImages(gallery) {
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

  renderImages(gallery) {
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

  handleDrag = (e,data) => {
    this.setState({ deltaX: data.deltaX * 2 })
  }

  render() {
    const { match } = this.props
    return (
      <>
        <div className="gallery-buttons">
          {this.state.isLoadingNames ? <Loading /> : null}
          {this.renderGalleryNames()}
        </div>
        <div className="gallery-container h100">
          <Route path={`${match.path}/:slug`} render={(props) => <Gallery {...props} galleries={this.state.galleries} />} />
          <Route
            exact
            path={match.path}
            render={() => <h3>Please select a gallery.</h3>}
          />
        </div>
      </>
    )
  }
}

export default Portfolio
