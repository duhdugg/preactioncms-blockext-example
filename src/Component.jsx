import React from 'react'
import PropTypes from 'prop-types'

const component = (props) => {
  return (
    <div>
      <p>{props.msg}</p>
      <p>Here are the props I received:</p>
      <pre>{JSON.stringify(props, undefined, 4)}</pre>
    </div>
  )
}

component.propTypes = {
  preaction: PropTypes.object.isRequired,
  msg: PropTypes.string.isRequired,
}

export default component
