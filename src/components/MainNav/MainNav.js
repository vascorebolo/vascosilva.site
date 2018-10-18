import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './MainNav.css'

const MainNav = ({ title, routes }) => {
  function renderLinks() {
    return routes.map((item, index) => {
      return <Link to={item.path} key={`${index}-link`}>{ item.label }</Link>
    })
  }

  return (
    <div className="MainNavContainer">
      <div className="MainNavTitle">{ title }</div>
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
