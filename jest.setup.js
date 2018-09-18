import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

global.React = React

global.getConfig = () => {
  return {
    publicRuntimeConfig: {
      hostname: 'localhost:8000'
    }
  }
}

configure({ adapter: new Adapter() })
