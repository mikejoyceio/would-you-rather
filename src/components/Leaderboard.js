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

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users)
      .sort((a, b) => (
        (Object.keys(users[b].answers).length + users[b].questions.length) -
        (Object.keys(users[a].answers).length + users[a].questions.length)
      ))
  }
}

export default connect(mapStateToProps)(Leaderboard)
