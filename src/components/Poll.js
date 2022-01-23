import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Vote from './Vote'
import Results from './Results'

class Poll extends Component {
  render() {
    const { id, answered, questionExists } = this.props

    if (!questionExists) {
      return <Redirect to='/404' />
    }

    return (
      <div className='container w-[500px] mx-auto'>
        {answered
          ? <Results id={id} />
          : <Vote id={id} />
        }
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser, questions }, props) {
  const { id } = props.match.params
  const answered = Object.keys(users[authedUser].answers)
    .includes(id)
  const questionExists = id in questions

  return {
    id,
    answered,
    questionExists,
  }
}

export default connect(mapStateToProps)(Poll)
