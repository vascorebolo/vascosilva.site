import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MainNav = ({ routes }) => {
  function renderLinks() {
    return routes.map((item, index) => {
      return <Link to={item.path} key={`${index}-link`}>{ item.label }</Link>
    })
  }

  return (
    <nav>
      { renderLinks() }
    </nav>
  )
}

MainNav.propTypes = {
  routes: PropTypes.array
}

MainNav.displayName = 'MainNav'

export default MainNav
