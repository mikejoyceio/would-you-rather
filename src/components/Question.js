import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Image from './Image'

class Question extends Component {
  render() {
    const { question, author } = this.props
    const { name, avatar } = author
    const { id, optionOne } = question

    return (
      <div className='grid border border-gray-200 rounded py-4 px-5 mb-5'>
        <div>
          <h6 className='text-lg font-bold mb-5'>
            { name } asks:
          </h6>
        </div>
        <div className='grid grid-cols-12'>
          <div className='col-span-4'>
            <Image className='w-20 rounded-full' image={avatar} alt={name} />
          </div>
          <div className='col-span-8'>
            <p className='font-bold mb-2'>Would you rather</p>
            <p className='mb-4'>
              { optionOne.text }...
            </p>
            <Link to={`/poll/${id}`} className='bg-black block text-center w-full text-white font-bold py-2 px-4 rounded text-xs'>
              View Poll
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id]
  const author = users[question.author]

  return {
    question,
    author,
  }
}

export default connect(mapStateToProps)(Question)
