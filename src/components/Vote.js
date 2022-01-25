import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestionAnswer } from '../actions/questions'
import Image from './Image'

class Vote extends Component {
  state = {
    answer: null
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { answer } = this.state
    const { id, authedUser, dispatch } = this.props

    if (!answer) return

    dispatch(handleAddQuestionAnswer({
      id,
      authedUser,
      answer,
    }))

    this.setState(() => ({
      answer: null
    }))
  }

  handleSelectOption = (e) => {
    const option = e.target.value

    this.setState(() => ({
      answer: option
    }))
  }

  render() {
    const { author, question } = this.props
    const { answer } = this.state
    const { name, avatar } = author
    const { optionOne, optionTwo } = question

    return (
      <div className='grid border border-gray-200 rounded py-4 px-5'>
        <div>
          <h6 className='text-lg font-bold mb-5'>
            {name} asks:
          </h6>
        </div>
        <div className='grid grid-cols-12'>
          <div className='col-span-4'>
            <Image className='w-20 rounded-full' image={avatar} alt={name} />
          </div>
          <div className='col-span-8'>
            <p className='font-bold mb-4'>Would you rather...</p>
            <form onSubmit={this.handleSubmit}>
              <label className='flex gap-2 items-center mb-2'>
                <input
                  type='radio'
                  name='option'
                  value='optionOne'
                  onChange={this.handleSelectOption}
                />
                <div>
                  {optionOne.text}
                </div>
              </label>

              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='option'
                  value='optionTwo'
                  onChange={this.handleSelectOption}
                />
                <div>
                  {optionTwo.text}
                </div>
              </label>
              <button
                type='submit'
                className='bg-black w-full text-white font-bold py-2 px-4 mt-4 rounded'
                disabled={answer === null}
              >
                Submit
              </button>
            </form>
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

  return {
    id,
    author,
    authedUser,
    question,
  }
}

export default connect(mapStateToProps)(Vote)
