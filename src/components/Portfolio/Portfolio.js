import React, { Component } from 'react'
import Loading from '../Loading'
import './Portfolio.css'
import ImageLoader from 'react-loading-image'

class Portfolio extends Component {
  state = {
    galleries: [],
    gallery: null,
    isLoadingNames: true,
  }

  componentWillMount() {
    fetch('https://vascosilva.site/cms/api/collections/get/gallery?token=6b51bd66a3c69d41bdb2ac0f63de66')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ galleries: responseJson.entries, isLoadingNames: false })
        console.log(this.state.galleries)
      })
      .catch((error) => {
        console.error(error)
        throw error
      });
  }

  renderGalleryNames() {
    return this.state.galleries.map((gallery, index) =>
      <button
        className="gallery-button"
        key={`gallery-${index}`}
        data-gallery={index}
        onClick={this.handleClickGallerySelect.bind(this)}
      >
        {gallery.title}
      </button>
    )
  }

  renderGallery() {
    let gallery = this.state.gallery
    if (gallery != null) {
      return (
        <div className="h100 gallery-container">
          <div className="gallery">
            <div className="gallery-info">
              <h3>{gallery.title}</h3>
              {gallery.description}
            </div>
            {
              gallery.photos.map((photo, index) => {
                return (
                  <ImageLoader
                    src={`https://vascosilva.site${photo.path}`}
                    loading={() => <Loading />}
                    image={props => <img
                      src={`https://vascosilva.site${photo.path}`}
                      key={`gallery-${gallery.title}-${index}`}
                      alt={`${gallery.title}-${index}`}
                    /> }
                    error={() => <div>Error</div>}
                  />
                )
              })
            }
          </div>
        </div>
      )
    } else {
      return this.state.isLoadingNames
        ? null
        : <div>
            <br />
            <p>A space to share my photos. A space that I can practice some kind of curation to my photographic endeavors.</p>
            <p>
              I would be lying if I told you I only make photos to myself. I do it for my own pleasure, putting my personal
              tastes and feelings in everything I point my camera to, but the ultimate goal is always to share my vision, my
              way of looking into the world.
            </p>
            <p>
              I consider myself lucky if I can "touch" someone, somehow...
            </p>
          </div>
    }
  }

  handleClickGallerySelect(e) {
    this.setState({gallery: this.state.galleries[e.target.dataset.gallery]})
  }

  render() {
    return (
      <div className="portfolio-container h100">
        <div className="gallery-buttons">
          {this.state.isLoadingNames ? <Loading /> : null}
          {this.renderGalleryNames()}
        </div>
        <div className="gallery-container" className="h100">
          {this.renderGallery()}
        </div>
      </div>
    )
  }
}

export default Portfolio
