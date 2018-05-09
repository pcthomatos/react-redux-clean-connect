import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export const cleanConnect = (cleanPropsFn) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
    (propsFromState, propsFromDispatch, ownProps) => {
      const cleanProps = cleanPropsFn(propsFromState, ownProps)

      let mergeProps = Object.create(null)

      if (cleanProps !== null && cleanProps !== undefined) {
        for (let [key, value] of Object.entries(cleanProps)) {
          if (typeof value === 'function') {
            mergeProps[key] = bindActionCreators(value, propsFromDispatch.dispatch)
          } else {
            mergeProps[key] = value
          }
        }
      }
      return {
        ...ownProps,
        ...mergeProps,
      }
    },
  )
}
