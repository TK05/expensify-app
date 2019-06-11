// Higher Order Component (HOC)
// - A component (HOC) that renders another component
// - Reuse code, render hijacking, prop manipulation, abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return ({ isAdmin, ...props }) => (
    <div>
      { isAdmin && <p>This is private info. Pleast don't share!</p> }
      <WrappedComponent {...props} />
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)

function requireAuthentication(WrappedComponent) {
  function RequireAuthentication({ isAuthenticated, ...props }) {
    return (
      <div>
        { isAuthenticated && <WrappedComponent {...props} />}
        { !isAuthenticated && <p>Not authenticated</p>}
      </div>
    )
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component'

  RequireAuthentication.displayName = `requireAuthentication(${wrappedComponentName})`
  return RequireAuthentication
}

const RequireAuthentication = requireAuthentication(Info)

ReactDOM.render(<AdminInfo isAdmin info="These are the details" />, document.getElementById('app'))
ReactDOM.render(<RequireAuthentication isAuthenticated info="These are the details" />, document.getElementById('app'))
