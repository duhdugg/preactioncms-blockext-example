import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Input } from '@preaction/inputs'

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

export { ExampleSettings }
