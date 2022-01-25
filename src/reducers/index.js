/**
 * @file all reducers
 */

import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading-bar'

/**
 * @see {@link https://redux.js.org/api/combinereducers}
 */
export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
})
