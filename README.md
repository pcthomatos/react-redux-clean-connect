# react-redux-clean-connect [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A React Redux helper for less React connect boilerplate

## Installation

```sh
$ npm install --save react-redux-clean-connect
```

## Usage

```js
// Connecting can look like this: ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼

import * as React from 'react'
import { cleanConnect } from 'react-redux-clean-connect'
import { getByUUID, updateSearchCriteria } from '../state/actions/userActions'

const mapStateAndDispatchToProps: MapStateAndDispatchToProps = (propsFromState, ownProps) => {
  const partialState = propsFromState.partialState

  return {
    // state props
    errorMessage: partialState.error.message,
    username: partialState.searchCriteria.username,
    usersObj: partialState.usersObj,

    // dispatch props
    getByUUID: () => getByUUID(partialState.searchCriteria),
    updateSearchCriteria,
  }
}

export default cleanConnect(mapStateAndDispatchToProps)(
    class UserList extends React.Component {


// Instead of looking like this: ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼

import * as React from 'react'
import { connect } from 'react-redux'
import { getByUUID, updateSearchCriteria } from '../state/actions/userActions'

const mapStateToProps = (store: any, ownProps: any) => {
  return {
    ...ownProps,
    errorMessage: partialState.error.message,
    username: partialState.searchCriteria.username,
    usersObj: partialState.usersObj,
  }
}

const mapDispatchToProps = {
  getByUUID,
  updateSearchCriteria
}

const mergeProps: any = (propsFromState, propsFromDispatch, ownProps) => {
  const partialState = propsFromState.partialState

  return {
    ...ownProps,
    ...propsFromState
    ...propsFromDispatch
    getByUUID: () => propsFromDispatch.getByUUID(partialState.searchCriteria),
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  class Loyalty extends React.Component<any, any> {

```
## License

MIT © [PC Thomatos](https://github.com/pcthomatos)


[npm-image]: https://badge.fury.io/js/react-redux-clean-connect.svg
[npm-url]: https://npmjs.org/package/react-redux-clean-connect
[travis-image]: https://travis-ci.org/pcthomatos/react-redux-clean-connect.svg?branch=master
[travis-url]: https://travis-ci.org/pcthomatos/react-redux-clean-connect
[daviddm-image]: https://david-dm.org/pcthomatos/react-redux-clean-connect.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/pcthomatos/react-redux-clean-connect
[coveralls-image]: https://coveralls.io/repos/github/pcthomatos/react-redux-clean-connect/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/pcthomatos/react-redux-clean-connect

