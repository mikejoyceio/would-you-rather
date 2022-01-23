import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Image from './Image'

class Question extends Component {
  render() {
    const { question, author } = this.props
    const { id, optionOne } = question

    return (
      <div className='grid'>
        <div>
          <h6 className='text-lg font-bold'>
            { author.name } asks:
          </h6>
        </div>
        <div className='grid grid-cols-12'>
          <div className='col-span-4'>
            <Image className='w-20 rounded-full' image={author.avatar} />
          </div>
          <div className='col-span-8'>
            Would you rather
            <p>
              { optionOne.text }
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
