/**
 * @file UserMenu component
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Image from './Image'

class UserMenu extends Component {
  handleLogout = () => {
    const { dispatch } = this.props

    dispatch(setAuthedUser(null))
  }

  render() {
    const { authedUser, user } = this.props

    return (
      <div>
        {authedUser && (
          <ul className='flex gap-8 h-10 items-center'>
            <li>
              <div className='flex items-center'>
                <div className='mr-2'>
                  {user.name}
                </div>
                <div>
                  <Image className='w-7 rounded-full' image={user.avatar} alt={user.name} />
                </div>
              </div>
            </li>
            <li>
              <button
                type='button'
                className='bg-black text-white font-bold py-1 px-4 text-xs rounded'
                onClick={this.handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    )
  }
}

/**
 * @param {object} state - Redux state
 * @param {string} state.authedUser - authenticated user id
 * @param {object} state.users - user objects
 */
function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser]

  return {
    authedUser,
    user,
  }
}

/**
 * @see {@link https://react-redux.js.org/api/connect}
 */
export default connect(mapStateToProps)(UserMenu)
