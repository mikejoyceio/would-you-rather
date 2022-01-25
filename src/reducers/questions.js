/**
 * @file questions reducer
 */

import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER } from '../actions/questions'

/**
 * @param {object} state - current state
 * @param {object} action - action object
 */
export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ADD_QUESTION_ANSWER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]: {
            ...state[action.id][action.answer],
            votes: state[action.id][action.answer].votes.concat([action.authedUser]),
          }
        }
      }
    default:
      return state
  }
}
