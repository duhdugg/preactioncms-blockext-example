import React from 'react'
import PropTypes from 'prop-types'

function Example(props) {
  return (
    <div>
      <p>{props.msg}</p>
      {props.debug ? (
        <div>
          <p>Here are the props I received:</p>
          <pre>{JSON.stringify(props, undefined, 4)}</pre>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

Example.propTypes = {
  debug: PropTypes.bool,
  preaction: PropTypes.object.isRequired,
  msg: PropTypes.string.isRequired,
}

Example.extensionType = 'block'
Example.label = 'Example Extension Block'
Example.defaultProps = {
  msg: '',
  debug: false,
}

export { Example }
