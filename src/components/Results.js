import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from './Result'
import Image from './Image'

class Results extends Component {
  render() {
    const { author, question, optionSelected } = this.props
    const { optionOne, optionTwo } = question

    const totalVotes = optionOne.votes.length + optionTwo.votes.length

    return (
      <div className='grid'>
        <div>
          <h6 className='text-lg font-bold'>
            Asked by {author.name}
          </h6>
        </div>
        <div className='grid grid-cols-12'>
          <div className='col-span-4'>
            <Image className='w-20 rounded-full' image={author.avatar} />
          </div>
          <div className='col-span-8'>
            <p className='font-bold'>Results</p>
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
