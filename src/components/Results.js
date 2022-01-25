import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from './Result'
import Image from './Image'

class Results extends Component {
  render() {
    const { author, question, optionSelected } = this.props
    const { name, avatar } = author
    const { optionOne, optionTwo } = question

    const totalVotes = optionOne.votes.length + optionTwo.votes.length

    return (
      <div className='grid border border-gray-200 rounded py-4 px-5'>
        <div>
          <h6 className='text-lg font-bold mb-5'>
            Asked by {name}
          </h6>
        </div>
        <div className='grid grid-cols-12'>
          <div className='col-span-4'>
            <Image className='w-20 rounded-full' image={avatar} alt={name} />
          </div>
          <div className='col-span-8'>
            <p className='font-bold mb-4'>Results</p>
            <Result
              option={optionOne}
              totalVotes={totalVotes}
              selected={optionSelected === 'optionOne'}
            />
            <Result
              option={optionTwo}
              totalVotes={totalVotes}
              selected={optionSelected === 'optionTwo'}
            />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props
  const question = questions[id]
  const author = users[question.author]
  const optionSelected = users[authedUser].answers[id]

  return {
    id,
    author,
    question,
    optionSelected,
  }
}

export default connect(mapStateToProps)(Results)
