/**
 * @file users actions
 */

export const RECEIVE_USERS = 'RECEIVE_USERS'

/**
 * @param {object} users - user objects 
 */
export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}
