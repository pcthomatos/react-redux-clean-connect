import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React, { Component } from 'react'
import { createStore } from 'redux'
import { cleanConnect } from '../src'

configure({ adapter: new Adapter() })

const propA = 'propA'
const propANewValue = 'propB'

const PROPB_TYPE = 'PROPB'
const propB = function() {
  return {
    type: PROPB_TYPE,
  }
}

describe('React', () => {
  describe('connect', () => {
    const testCleanConnect = () =>
      cleanConnect(function(mapStateAndDispatchToProps) {
        return {
          propA: mapStateAndDispatchToProps.propA,
          propB: propB,
        }
      })

    it('can create constant object', () => {
      expect(testCleanConnect() instanceof Function).toEqual(true)
    })

    it('passes through props', () => {
      const store = createStore((state = { propA: propA }, action) => {
        switch (action.type) {
          case PROPB_TYPE: {
            return {
              ...state,
              propA: propANewValue,
            }
          }
          default: {
            return state
          }
        }
      })
      class Container extends Component {
        render() {
          return <div />
        }
      }

      const ConnectedPassthrough = cleanConnect(function(mapStateAndDispatchToProps) {
        return {
          propA: mapStateAndDispatchToProps.propA,
          propB: propB,
        }
      })(Container)

      const mountedContainer = shallow(<ConnectedPassthrough store={store} />)
      let component = mountedContainer.find(Container)
      expect(component.props().propA).toEqual(propA)

      component.props().propB()

      mountedContainer.update()
      component = mountedContainer.find(Container)
      expect(component.props().propA).toEqual(propANewValue)
    })
  })
})
