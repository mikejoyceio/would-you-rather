/**
 * @file questions actions
 */

import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

/**
 * @param {object} question - question object
 */
export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

/**
 * @param {object} obj
 * @param {number} obj.id - question id
 * @param {string} obj.authedUser - authenticated user id
 * @param {string} obj.answer - users's answer
 */
export function addQuestionAnswer ({ id, authedUser, answer }) {
  return {
    type: ADD_QUESTION_ANSWER,
    id,
    authedUser,
    answer,
  }
}

/**
 * @param {string} answer - user's answer
 */
export function handleAddQuestionAnswer (answer) {
  return (dispatch) => {
    dispatch(addQuestionAnswer(answer))

    return saveQuestionAnswer(answer)
      .catch((error) => {
        console.warn('Error in handleAddQuestionAnswer: ', error)
        alert('There was an error answering the question. Try again.')
      })
  }
}

/**
 * @param {object} obj
 * @param {string} obj.optionOneText - question one
 * @param {string} obj.optionTwoText - question two
 */
export function handleAddQuestion ({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

/**
 * @param {object} questions - question objects
 */
export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
