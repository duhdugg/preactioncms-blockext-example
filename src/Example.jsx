import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Input } from '@preaction/inputs'

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

function ExampleSettings(props) {
  return (
    <div>
      <h6>Example Settings</h6>
      <hr className='mb-3' />
      <Input
        label='Message'
        value={props.propsData.msg}
        valueHandler={props.getPropsDataValueHandler('msg')}
      />
      <Checkbox
        label='Debug'
        checked={!!props.propsData.debug}
        valueHandler={props.getPropsDataValueHandler('debug')}
      />
    </div>
  )
}

ExampleSettings.propTypes = {
  propsData: PropTypes.object.isRequired,
  getPropsDataValueHandler: PropTypes.func.isRequired,
}

Example.Settings = ExampleSettings

export { Example }
