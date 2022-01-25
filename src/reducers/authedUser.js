/**
 * @file authedUser reducer
 */

import { SET_AUTHED_USER } from '../actions/authedUser'

/**
 * @param {string} state - current state
 * @param {object} action - action object
 */
export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id
    default:
      return state
  }
}
