import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    id: ''
  }

  handleSelectUser = (e) => {
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
      id: ''
    }))
  }

  render() {
    const { users, userIds } = this.props
    const { id } = this.state

    return (
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-96 mx-auto border'>
        <div className='mb-4'>
          <h1 className='font-bold text-center'>Would You Rather</h1>
        </div>
        <div className='my-10'>
          <p className='font-bold text-2xl uppercase text-center'>Sign In</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='mb-6'>
            <select
              className='w-full border border-gray-200 rounded p-2'
              placeholder='Select User'
              onChange={(e) => this.handleSelectUser(e)}
            >
              <option value=''>Select User</option>
              {userIds.map((id) => (
                <option value={id} key={id}>{users[id].name}</option>
              ))}
            </select>
          </div>
          <div>
            <button
              type='submit'
              className='bg-black w-full text-white font-bold py-2 px-4 rounded'
              disabled={id === ''}
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
