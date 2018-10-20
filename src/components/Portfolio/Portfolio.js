import React, { Component } from 'react'
import Loading from '../Loading'
import './Portfolio.css'

class Portfolio extends Component {
  state = {
    galleries: [],
    gallery: null,
    isLoadingNames: true,
  }

  componentWillMount() {
    fetch('http://vascosilva.site/cms/api/collections/get/gallery?token=6b51bd66a3c69d41bdb2ac0f63de66')
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
              <h2>{gallery.title}</h2>
              <p>{gallery.description}</p>
            </div>
            {
              gallery.photos.map((photo, index) => {
                return (
                  <img
                    src={`https://vascosilva.site${photo.path}`}
                    key={`gallery-image-${index}`}
                    alt={`${gallery.title}-${index}`}
                  />
                )
              })
            }
          </div>
        </div>
      )
    } else {
      return this.state.isLoadingNames ? null : <p>No gallery selected</p>
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
