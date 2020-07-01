import Component from './Component.jsx'
import React from 'react'

const mockPreaction = {
  appRoot: '',
  block: { settings: {} },
  editable: false,
  settings: { siteTitle: 'Site Title' },
  page: { settings: {} },
  navigate: (path) => {
    console.debug(`navigate('${path}')`)
  },
}

function App() {
  return (
    <div className='App'>
      <main>
        <Component preaction={mockPreaction} msg='Hello World' />
      </main>
    </div>
  )
}

export default App
