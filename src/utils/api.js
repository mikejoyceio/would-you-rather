import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

/**
 * @param {object} - question data
 */
export function saveQuestion (data) {
  return _saveQuestion(data)
}

/**
 * @param {object} - question answer data
 */
export function saveQuestionAnswer (data) {
  return _saveQuestionAnswer(data)
}
