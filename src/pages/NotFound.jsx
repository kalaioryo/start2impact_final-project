import React from 'react'

import { useRouteError, Link } from 'react-router-dom'

const NotFound = () => {

  const error = useRouteError()
  console.log(error);

  return (
    <div>
      <h1 className="w-full bg-secondary mt-14 text-center">Not NotFound</h1>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"}>Tornare alla home</Link>
    </div>
  )
}

export default NotFound