import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

const RenderZone = ({ routes }) => {
  function renderRoutes() {
    return routes.map((item, index) => {
      let dynamicComponent = require('../' + item.component + '/' + item.component).default

      return (
        <Route
          key={`${index}-route`}
          path={item.path}
          exact={item.exact}
          component={dynamicComponent}
        />
      )
    })
  }

  return (
      <Switch>
       {renderRoutes()}
      </Switch>
  )
}

RenderZone.propTypes = {
  routes: PropTypes.array
}

RenderZone.displayName = 'RenderZone'

export default RenderZone
