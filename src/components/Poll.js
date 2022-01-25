/**
 * @file Poll component
 */

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

 /**
  * @param {object} state - Redux state
  * @param {string} state.authedUser - authenticated user id
  * @param {object} state.questions - question objects
  * @param {object} state.users - user objects
  * @param {object} props - props passed into the component
  */
function mapStateToProps ({ authedUser, questions, users }, props) {
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

/**
 * @see {@link https://react-redux.js.org/api/connect}
 */
export default connect(mapStateToProps)(Poll)
