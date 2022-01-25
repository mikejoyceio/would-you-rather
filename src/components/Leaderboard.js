/**
 * @file Leaderboard component
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardCard from './LeaderboardCard'

class Leaderboard extends Component {
  render() {
    const { userIds } = this.props

    return (
      <>
        {userIds.map((id) => (
          <LeaderboardCard id={id} key={id} />
        ))}
      </>
    )
  }
}

/**
 * @param {object} state - Redux state
 * @param {object} state.users - user objects
 */
function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users)

      // sort users by the highest total number of questions and answers
      .sort((a, b) => (
        (Object.keys(users[b].answers).length + users[b].questions.length) -
        (Object.keys(users[a].answers).length + users[a].questions.length)
      ))
  }
}

/**
 * @see {@link https://react-redux.js.org/api/connect}
 */
export default connect(mapStateToProps)(Leaderboard)
