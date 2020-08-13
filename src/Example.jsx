import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Input } from '@preaction/inputs'

class Example extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
        {this.props.debug ? (
          <div>
            <p>Here are the props I received:</p>
            <pre>{JSON.stringify(this.props, undefined, 4)}</pre>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
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

class ExampleSettings extends React.Component {
  render() {
    return (
      <div>
        <h6>Example Component Settings</h6>
        <hr className='mb-3' />
        <Input
          label='Message'
          value={this.props.propsData.msg}
          valueHandler={this.props.getPropsDataValueHandler('msg')}
        />
        <Checkbox
          label='Debug'
          checked={!!this.props.propsData.debug}
          valueHandler={this.props.getPropsDataValueHandler('debug')}
        />
      </div>
    )
  }
}

ExampleSettings.propTypes = {
  propsData: PropTypes.object.isRequired,
  getPropsDataValueHandler: PropTypes.func.isRequired,
}

Example.Settings = ExampleSettings

export { Example }
