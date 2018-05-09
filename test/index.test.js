import { cleanConnect } from '../src'
const mergedProps = Object.assign(
  {},
  {
    propA: 'propA',
    propB: () => 1,
  },
)

describe('defineAction()', () => {
  describe('resulting connect function', () => {
    it('can create constant object', () => {
      const testCleanConnect = () =>
        cleanConnect(function() {
          return mergedProps
        })
      expect(testCleanConnect() instanceof Function).toEqual(true)
    })
  })
})
