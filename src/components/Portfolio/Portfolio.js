import React, { Component } from 'react'
import Loading from '../Loading'
import './Portfolio.css'
import { Link, Route } from 'react-router-dom'
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
              className={`${match && match.params.slug.toString() === gallery.slug ? "active" : ""} gallery-button`}
            >
              { gallery.title }
            </Link>
          )}
        />
      )
    })
  }

  renderEmpty() {
    return this.state.isLoadingNames
      ? <></>
      : <h3>Please select a gallery.</h3>
  }

  render() {
    const { match } = this.props
    return (
      <>
        <div className="gallery-buttons">
          {this.state.isLoadingNames ? <Loading /> : null}
          {this.renderGalleryNames()}
        </div>
        <div className="gallery-container">
          <Route
            path={`${match.path}/:slug`}
            render={(props) => <Gallery {...props} galleries={this.state.galleries} />}
          />
          <Route
            exact
            path={match.path}
            render={() => this.renderEmpty() }
          />
        </div>
      </>
    )
  }
}

export default Portfolio
