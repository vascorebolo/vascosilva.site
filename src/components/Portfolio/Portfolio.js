import React, { Component } from 'react'
import Loading from '../Loading'
import './Portfolio.css'
import ImageLoader from 'react-loading-image'
import GalleryPhotoLoading from '../GalleryPhotoLoading'
import HorizontalScroll from 'react-scroll-horizontal'
import Media from 'react-media'
import Draggable from 'react-draggable'
import { Link, Route, Switch } from 'react-router-dom'

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
    return this.state.galleries.map((gallery, index) =>
      // <button
      //   className="gallery-button"
      //   key={`gallery-${index}`}
      //   data-gallery={index}
      //   onClick={this.handleClickGallerySelect.bind(this)}
      // >
      //   {gallery.title}
      // </button>
      <Link to={`${this.props.match.path}/${gallery._id}`} key={`gallery-${gallery._id}`} data-gallery={index}>{gallery.title}</Link>
    )
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



  handleClickGallerySelect(e) {
    console.log('===============================>', this.state.galleries[e.target.dataset.gallery]);
    this.setState({gallery: this.state.galleries[e.target.dataset.gallery]})
  }

  myGallery() {
    return (
      <GalleryRoute isLoadingNames={this.state.isLoadingNames} gallery={this.state.gallery} />
    )
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
          <h1>test</h1>
          <Route path={`${match.path}/:topicId`} component={GalleryRoute} />
          <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
          />
          <h2>end</h2>
        </div>
      </>
    )
  }
}

export default Portfolio

const GalleryRoute = ({match}) => {
  return (
    <p>{match.params.topicId}</p>
  )
}
