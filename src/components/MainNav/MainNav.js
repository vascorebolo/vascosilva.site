import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import './MainNav.css'

const MainNav = ({ title, routes }) => {
  function renderLink(item, index) {
    if (item.showLink)
      return (
        <Route
          key={`link-to-${item.path}`}
          path={item.path}
          children={({ match }) => (
            <Link
              className={match ? "active" : ""}
              to={item.path} key={`${index}-link`}
            >
              { item.label }
            </Link>
          )}
        />
      )
  }

  function renderLinks() {
    return routes.map((item, index) => {
      return renderLink(item, index)
    })
  }

  return (
    <div className="MainNavContainer">
      <Route
        path={'/'}
        exact
        children={({ match }) => (
          <Link to={'/'} className={match ? "active" : ""}>
            { title }
          </Link>
        )}
      />
      <nav className="MainNav">
        { renderLinks() }
      </nav>
    </div>
  )
}

MainNav.propTypes = {
  title: PropTypes.string,
  routes: PropTypes.array
}

MainNav.displayName = 'MainNav'

export default MainNav
