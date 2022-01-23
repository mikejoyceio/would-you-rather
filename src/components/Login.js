import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    id: null
  }

  handleSelectUser = (e) => {
    const { dispatch } = this.props
    const id = e.target.value

    this.setState(() => ({
      id
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { id } = this.state
    const { dispatch } = this.props

    dispatch(setAuthedUser(id))

    this.setState(() => ({
      id: null
    }))
  }

  render() {
    const { users, userIds } = this.props
    const { id } = this.state

    return (
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-96 mx-auto border'>
        <div className='mb-4'>
          <h2 className='font-bold text-center'>Would You Rather</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='mb-6'>
            <select
              className='w-full'
              placeholder='Select User'
              onChange={(e) => this.handleSelectUser(e)}
            >
              <option>Select User</option>
              {userIds.map((id) => (
                <option value={id} key={id}>{users[id].name}</option>
              ))}
            </select>
          </div>
          <div>
            <button
              type='submit'
              className='bg-black w-full text-white font-bold py-2 px-4 rounded'
              disabled={id === null}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)
