import React, { Component } from 'react'
import { connect } from 'react-redux'
import Image from './Image'

class LeaderboardCard extends Component {
  render() {
    const { user } = this.props
    const { name } = user
    const answered = Object.keys(user.answers).length
    const created = user.questions.length

    return (
      <div className='w-[500px] m-auto'>
        <div className='grid grid-cols-12'>
          <div className='col-span-4'>
            <Image className='w-20 rounded-full' image={user.avatar} />
          </div>
          <div className='col-span-4'>
            <h6>{name}</h6>
            <p>Answered: {answered}</p>
            <p>Created: {created}</p>
          </div>
          <div className='col-span-4'>
            <p>{answered + created}</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }, props) {
  const { id } = props
  const user = users[id]

  return {
    user
  }
}

export default connect(mapStateToProps)(LeaderboardCard)
