/**
 * @file authedUser actions
 */

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

/**
 * @param {number} id - authenticated user id
 */
export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}
