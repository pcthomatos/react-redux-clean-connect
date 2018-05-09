declare module 'react-redux-clean-connect' {
  export interface MapStateAndDispatchToProps {
    (propsFromState: any, ownProps: any): any
  }

  export function cleanConnect(mapStateAndDispatchToProps: MapStateAndDispatchToProps): any
}
