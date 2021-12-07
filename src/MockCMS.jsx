import { Example } from './Example.jsx'
import { Boilerplate, Card } from '@preaction/bootstrap-clips'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@preaction/bootstrap-clips/dist/preaction-bootstrap-clips.css'
import './mockcms.css'

const propsData = {
  msg: 'Hello, Strangers!',
  debug: false,
}

const mockPreaction = {
  appRoot: '',
  block: {
    blockType: 'ext',
    settings: {
      header: 'Component View',
      extKey: 'Example',
      propsData,
    },
  },
  editable: false,
  settings: { siteTitle: 'Preaction CMS Extension Testing' },
  page: { settings: {} },
  navigate: (path) => {
    console.debug(`navigate('${path}')`)
  },
}

class MockCMS extends React.Component {
  constructor(props) {
    super(props)
    this.state = { propsData, mockPreaction }
  }

  getPropsDataValueHandler(key) {
    return (value) => {
      this.setState((state) => {
        const propsData = state.propsData
        propsData[key] = value
        state.propsData = propsData
        return state
      })
    }
  }

  render() {
    // this emulates how the component is rendered in Preaction CMS
    return (
      <div className='App'>
        <Boilerplate
          footer={
            <Card header='Settings View' headerTheme='dark' className='mb-3'>
              <Example.Settings
                propsData={propsData}
                getPropsDataValueHandler={this.getPropsDataValueHandler.bind(
                  this
                )}
              />
            </Card>
          }
        >
          <Card
            header={mockPreaction.block.settings.header}
            headerTheme='blue'
            className='mb-3'
          >
            <Example preaction={mockPreaction} {...propsData} />
          </Card>
        </Boilerplate>
      </div>
    )
  }
}

export default MockCMS
