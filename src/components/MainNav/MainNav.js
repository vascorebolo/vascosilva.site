import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './MainNav.css'

const MainNav = ({ title, routes }) => {
  function renderLink(item, index) {
    if (item.showLink)
      return <Link to={item.path} key={`${index}-link`}>{ item.label }</Link>
  }

  function renderLinks() {
    return routes.map((item, index) => {
      return renderLink(item, index)
    })
  }

  return (
    <div className="MainNavContainer">
      <div className="MainNavTitle">
        <Link to={'/'}>
          { title }
        </Link>
      </div>
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
