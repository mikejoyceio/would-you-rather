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
      <div className='w-[500px] m-auto border border-gray-200 rounded py-4 px-5 mb-5'>
        <div className='grid grid-cols-12'>
          <div className='col-span-3'>
            <Image className='w-20 rounded-full' image={user.avatar} />
          </div>
          <div className='col-span-5'>
            <h6 class='font-bold text-xl mb-5'>{name}</h6>
            <p className='text-sm text-gray-800'>Answered Questions: <strong>{answered}</strong></p>
            <hr className='my-2'/>
            <p className='text-sm text-gray-800'>Created Questions: <strong>{created}</strong></p>
          </div>
          <div className='col-span-4 text-center'>
            <p className='font-bold mb-5 uppercase'>Total</p>
            <div className='text-2xl font-bold flex justify-center items-center rounded-full bg-yellow-300 text-gray-800 font-semibold h-12 w-12 text-center leading-none m-auto'>
              {answered + created}
            </div>
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
