import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    questionOne: '',
    questionTwo: '',
    toHome: false,
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { dispatch } = this.props

    dispatch(handleAddQuestion({
      optionOneText: this.state.questionOne,
      optionTwoText: this.state.questionTwo,
    }))

    this.setState(() => ({
      questionOne: '',
      questionTwo: '',
      toHome: true
    }))
  }

  handleChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value
    }))
  }

  render() {
    const { questionOne, questionTwo, toHome } = this.state

    if (toHome) {
      return <Redirect to='/' />
    }

    return (
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-96 mx-auto border text-center'>
        <div className='mb-4'>
          <h2 className='font-bold'>Create New Question</h2>
        </div>
        <p className='mb-5 text-gray-800'>Would you rather...</p>
        <form onSubmit={this.handleSubmit}>
          <div className='mb-6'>
            <input
              type='text'
              className='w-full border border-gray-200 rounded p-2'
              name='questionOne'
              onChange={this.handleChange}
            />
          </div>
          <div className='mb-6'>
            <p className='text-gray-800'>OR</p>
          </div>
          <div className='mb-6'>
            <input
              type='text'
              className='w-full border border-gray-200 rounded p-2'
              name='questionTwo'
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button
              type='submit'
              className='bg-black w-full text-white font-bold py-2 px-4 rounded'
              disabled={!(questionOne && questionTwo)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
