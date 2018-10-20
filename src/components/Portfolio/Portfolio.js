import React, { Component } from 'react'

class Portfolio extends Component {
  static propTypes = {

  }

  state = {
    galleries: [],
    gallery: null
  }

  componentWillMount() {
    fetch('http://vascosilva.site/cms/api/collections/get/gallery?token=6b51bd66a3c69d41bdb2ac0f63de66')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ galleries: responseJson.entries })
        console.log(this.state.galleries)
      })
      .catch((error) => {
        console.error(error)
        throw error
      });
  }

  renderGalleryNames() {
    return this.state.galleries.map((gallery, index) =>
      <div key={`gallery-${index}`}>
        <a
          data-gallery={index}
          onClick={this.handleClickGallerySelect.bind(this)}
        >
          {gallery.title}
        </a>
      </div>
    )
  }

  renderGallery() {
    let gallery = this.state.gallery
    if (gallery != null) {
      return (
        <div>
          <h2>{gallery.title}</h2>
          <p>{gallery.description}</p>
          {
            gallery.photos.map((photo, index) => {
              return <img src={`https://vascosilva.site${photo.path}`} width="200px" />
            })
          }
        </div>
      )
    } else {
      return <p>No gallery selected</p>
    }
  }

  handleClickGallerySelect(e) {
    this.setState({gallery: this.state.galleries[e.target.dataset.gallery]})
  }

  render() {
    return (
      <div>
        <h1>Galleries</h1>
        <div>
          {this.renderGalleryNames()}
        </div>
        <div>
          {this.renderGallery()}
        </div>
      </div>
    )
  }
}

export default Portfolio
